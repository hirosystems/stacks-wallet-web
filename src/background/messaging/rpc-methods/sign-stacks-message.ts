import {
  RpcErrorCode,
  type StxSignMessageRequest,
  type StxSignMessageRequestParamsStructured,
} from '@leather.io/rpc';
import { isDefined, isUndefined } from '@leather.io/utils';

import { RouteUrls } from '@shared/route-urls';
import {
  getRpcSignStacksMessageParamErrors,
  validateRpcSignStacksMessageParams,
} from '@shared/rpc/methods/sign-stacks-message';
import { makeRpcErrorResponse } from '@shared/rpc/rpc-methods';

import {
  RequestParams,
  getTabIdFromPort,
  listenForPopupClose,
  makeSearchParamsWithDefaults,
  triggerRequestWindowOpen,
} from '../messaging-utils';
import { trackRpcRequestError, trackRpcRequestSuccess } from '../rpc-message-handler';

export async function rpcSignStacksMessage(
  message: StxSignMessageRequest,
  port: chrome.runtime.Port
) {
  if (isUndefined(message.params)) {
    void trackRpcRequestError({ endpoint: message.method, error: 'Undefined parameters' });
    chrome.tabs.sendMessage(
      getTabIdFromPort(port),
      makeRpcErrorResponse('stx_signMessage', {
        id: message.id,
        error: { code: RpcErrorCode.INVALID_REQUEST, message: 'Parameters undefined' },
      })
    );
    return;
  }

  if (!validateRpcSignStacksMessageParams(message.params)) {
    void trackRpcRequestError({ endpoint: message.method, error: 'Invalid parameters' });
    chrome.tabs.sendMessage(
      getTabIdFromPort(port),
      makeRpcErrorResponse('stx_signMessage', {
        id: message.id,
        error: {
          code: RpcErrorCode.INVALID_PARAMS,
          message: getRpcSignStacksMessageParamErrors(message.params),
        },
      })
    );
    return;
  }

  void trackRpcRequestSuccess({ endpoint: message.method });

  const requestParams: RequestParams = [
    ['message', message.params.message],
    ['messageType', message.params.messageType],
    ['requestId', message.id],
  ];

  if (isDefined(message.params.network)) {
    requestParams.push(['network', message.params.network.toString()]);
  }

  if ('domain' in message.params) {
    requestParams.push([
      'domain',
      (message.params as StxSignMessageRequestParamsStructured).domain.toString(),
    ]);
  }

  const { urlParams, tabId } = makeSearchParamsWithDefaults(port, requestParams);

  const { id } = await triggerRequestWindowOpen(RouteUrls.RpcStacksSignature, urlParams);

  listenForPopupClose({
    tabId,
    id,
    response: makeRpcErrorResponse('stx_signMessage', {
      id: message.id,
      error: {
        code: RpcErrorCode.USER_REJECTION,
        message: 'User rejected the Stacks message signing request',
      },
    }),
  });
}
