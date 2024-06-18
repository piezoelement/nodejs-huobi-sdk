import type { AccountType, BalanceType } from './types.js';
export declare class HuobiSDK {
    private url;
    private accessKey;
    private secretKey;
    constructor(url: string, accessKey: string, secretKey: string);
    private sendPublicRequest;
    private sendRequest;
    private getBody;
    private getSignature;
    getStatus(): Promise<any>;
    /**
     * Get all Accounts of the Current User
     */
    getAccounts(): Promise<{
        id: number;
        type: AccountType;
        subtype: string;
        state: 'working' | 'lock';
    }[]>;
    /**
     * Get Account Balance of a Specific Account
     * @param accountId
     */
    getBalance(accountId: number): Promise<{
        list: {
            currency: string;
            type: BalanceType;
            balance: string;
            'seq-num': string;
        }[];
    }>;
    getMarketDetail(symbol: string): Promise<any>;
    getSymbols(): Promise<any>;
    getTrade(symbol: string): Promise<any>;
    getOpenTrades(accountId: number): Promise<any>;
}
