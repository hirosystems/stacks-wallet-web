import { fetcher } from '@app/common/api/wrapped-fetch';

import { fetchBitcoinData } from './utils';

class Configuration {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}
interface UtxoResponseItem {
  txid: string;
  vout: number;
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  };
  value: number;
}

class AddressApi {
  configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  async getTransactionsByAddress(address: string) {
    return fetchBitcoinData({
      errorMsg: 'No transactions fetched',
      url: `${this.configuration.baseUrl}/address/${address}/txs`,
    });
  }

  async getUtxosByAddress(address: string): Promise<UtxoResponseItem[]> {
    return fetchBitcoinData({
      errorMsg: 'No UTXOs fetched',
      url: `${this.configuration.baseUrl}/address/${address}/utxo`,
    });
  }
}

class FeeEstimatesApi {
  configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  async getFeeEstimates() {
    return fetchBitcoinData({
      errorMsg: 'No fee estimates fetched',
      url: `${this.configuration.baseUrl}/fee-estimates`,
    });
  }
}

class TransactionsApi {
  configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  async postRawTransaction(rawTx: string) {
    const resp = await fetcher(`${this.configuration.baseUrl}/tx`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: rawTx,
    });
    return await resp.json();
  }
}

export class BitcoinClient {
  configuration: Configuration;
  addressApi: AddressApi;
  feeEstimatesApi: FeeEstimatesApi;
  transactionsApi: TransactionsApi;

  constructor(basePath: string) {
    this.configuration = new Configuration(basePath);
    this.addressApi = new AddressApi(this.configuration);
    this.feeEstimatesApi = new FeeEstimatesApi(this.configuration);
    this.transactionsApi = new TransactionsApi(this.configuration);
  }
}
