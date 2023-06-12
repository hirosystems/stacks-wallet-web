import { DefineRpcMethod, RpcRequest, RpcSuccessResponse } from '@btckit/types';

type SupportedMethodsRequest = RpcRequest<'supportedMethods'>;

type SupportedMethodsResponse = RpcSuccessResponse<{
  documentation: string;
  methods: { name: string; docsUrl?: string | string[] }[];
}>;

export type SupportedMethods = DefineRpcMethod<SupportedMethodsRequest, SupportedMethodsResponse>;
