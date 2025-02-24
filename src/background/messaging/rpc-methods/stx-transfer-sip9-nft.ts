import {
  type ClarityValue,
  createAddress,
  createStacksPublicKey,
  deserializeCV,
  postConditionToWire,
  publicKeyToAddressSingleSig,
  serializeCV,
  serializePostConditionWire,
  standardPrincipalCVFromAddress,
} from '@stacks/transactions';
import { createUnsecuredToken } from 'jsontokens';

import { extractKeyFromDescriptor } from '@leather.io/crypto';
import { type RpcParams, type RpcRequest, stxTransferSip9Nft } from '@leather.io/rpc';
import { TransactionTypes, getStacksAssetStringParts } from '@leather.io/stacks';

import { RouteUrls } from '@shared/route-urls';
import { makeNftPostCondition } from '@shared/utils/post-conditions';

import { getRootState } from '@background/get-root-state';

import { handleRpcMessage } from '../handle-rpc-message';
import {
  type RequestParams,
  getStxDefaultMessageParamsToTransactionRequest,
  validateRequestParams,
} from '../messaging-utils';

async function getMessageParamsToTransactionRequest(params: RpcParams<typeof stxTransferSip9Nft>) {
  const { contractAddress, contractAssetName, contractName } = getStacksAssetStringParts(
    params.asset
  );
  const state = await getRootState();
  const descriptor = state.chains.stx.default.currentAccountStacksDescriptor;
  const publicKey = createStacksPublicKey(extractKeyFromDescriptor(descriptor)).data;
  const currentStacksAddress = publicKeyToAddressSingleSig(
    publicKey,
    state.networks.currentNetworkId
  );

  const fnArgs: ClarityValue[] = [
    deserializeCV(params.assetId),
    standardPrincipalCVFromAddress(createAddress(params.address ?? currentStacksAddress)),
    standardPrincipalCVFromAddress(createAddress(params.recipient)),
  ];

  const postConditionOptions = {
    assetId: params.assetId,
    contractAddress,
    contractAssetName,
    contractName,
    stxAddress: params.address ?? currentStacksAddress,
  };

  const defaultParams = getStxDefaultMessageParamsToTransactionRequest(params);

  return {
    ...defaultParams,
    txType: TransactionTypes.ContractCall,
    contractAddress: params.asset.split('.')[0],
    contractName,
    functionArgs: fnArgs.map(arg => serializeCV(arg)),
    functionName: 'transfer',
    postConditions: [
      serializePostConditionWire(postConditionToWire(makeNftPostCondition(postConditionOptions))),
    ],
  };
}

export async function rpcStxTransferSip9Nft(
  message: RpcRequest<typeof stxTransferSip9Nft>,
  port: chrome.runtime.Port
) {
  const { id: requestId, method, params } = message;
  validateRequestParams({
    id: requestId,
    method,
    params,
    port,
    schema: stxTransferSip9Nft.params,
  });
  const txRequest = await getMessageParamsToTransactionRequest(params);
  const requestParams: RequestParams = [
    ['requestId', requestId],
    ['request', createUnsecuredToken(txRequest)],
  ];
  return handleRpcMessage({
    method: message.method,
    path: RouteUrls.RpcStxTransferSip10Ft,
    port,
    requestParams,
    requestId: message.id,
  });
}
