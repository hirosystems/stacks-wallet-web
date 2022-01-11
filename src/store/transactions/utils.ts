import { decodeToken } from 'jsontokens';
import { TransactionPayload } from '@stacks/connect';

export function getPayloadFromToken(requestToken: string) {
  const token = decodeToken(requestToken);
  return token.payload as unknown as TransactionPayload;
}
