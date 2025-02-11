import { RpcErrorCode, stxTransferStxMethodName } from '@leather.io/rpc';

import { WalletRequests, makeRpcErrorResponse } from '@shared/rpc/rpc-methods';

import { queueAnalyticsRequest } from '@background/background-analytics';
import { rpcSwap } from '@background/messaging/rpc-methods/open-swap';
import { rpcSignStacksTransaction } from '@background/messaging/rpc-methods/sign-stacks-transaction';

import { getTabIdFromPort, listenForOriginTabClose } from './messaging-utils';
import { rpcGetAddresses } from './rpc-methods/get-addresses';
import { rpcOpen } from './rpc-methods/open';
import { rpcSendTransfer } from './rpc-methods/send-transfer';
import { rpcSignMessage } from './rpc-methods/sign-message';
import { rpcSignPsbt } from './rpc-methods/sign-psbt';
import {
  rpcSignStacksMessage,
  rpcSignStacksStructuredMessage,
} from './rpc-methods/sign-stacks-message';
import { rpcStxCallContract } from './rpc-methods/stx-call-contract';
import { rpcStxGetAddresses } from './rpc-methods/stx-get-addresses';
import { rpcStxTransferStx } from './rpc-methods/stx-transfer-stx';
import { rpcSupportedMethods } from './rpc-methods/supported-methods';

export async function rpcMessageHandler(message: WalletRequests, port: chrome.runtime.Port) {
  listenForOriginTabClose({ tabId: port.sender?.tab?.id });

  console.log(message);

  switch (message.method) {
    case 'open': {
      await rpcOpen(message, port);
      break;
    }
    case 'openSwap': {
      await rpcSwap(message, port);
      break;
    }
    case 'getAddresses': {
      await rpcGetAddresses(message, port);
      break;
    }

    case 'signMessage': {
      await rpcSignMessage(message, port);
      break;
    }

    case 'sendTransfer': {
      await rpcSendTransfer(message, port);
      break;
    }

    case 'signPsbt': {
      await rpcSignPsbt(message, port);
      break;
    }

    case 'stx_callContract': {
      await rpcStxCallContract(message, port);
      break;
    }

    case 'stx_signTransaction': {
      await rpcSignStacksTransaction(message, port);
      break;
    }

    case 'supportedMethods': {
      rpcSupportedMethods(message, port);
      break;
    }

    case 'stx_signMessage': {
      await rpcSignStacksMessage(message, port);
      break;
    }

    case 'stx_signStructuredMessage': {
      await rpcSignStacksStructuredMessage(message, port);
      break;
    }

    case 'stx_getAddresses': {
      await rpcStxGetAddresses(message, port);
      break;
    }

    case stxTransferStxMethodName: {
      await rpcStxTransferStx(message, port);
      break;
    }

    default:
      chrome.tabs.sendMessage(
        getTabIdFromPort(port),
        makeRpcErrorResponse(message.method, {
          id: message.id,
          error: {
            code: RpcErrorCode.METHOD_NOT_FOUND,
            message: `"${message.method}" is not supported. Try running \`.request('supportedMethods')\` to see what Leather can do, or check out our developer documentation at https://leather.gitbook.io/developers/home/welcome`,
          },
        })
      );
      break;
  }
}

interface TrackRpcRequestSuccess {
  endpoint: WalletRequests['method'];
}
export async function trackRpcRequestSuccess(args: TrackRpcRequestSuccess) {
  return queueAnalyticsRequest('rpc_request_successful', { ...args });
}

interface TrackRpcRequestError {
  endpoint: WalletRequests['method'];
  error: string;
}
export async function trackRpcRequestError(args: TrackRpcRequestError) {
  return queueAnalyticsRequest('rpc_request_error', { ...args });
}
