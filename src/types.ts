export type AccountType =
  | 'spot'
  | 'margin'
  | 'otc'
  | 'point'
  | 'super-margin'
  | 'investment'
  | 'borrow'
  | 'minepool'
  | 'etf'
  | 'crypto-loans'
  | 'deposit-earning'
  | 'grid-trading'
  | 'otc-options';

export type BalanceType = 'trade' | 'frozen' | 'loan' | 'interest' | 'lock' | 'bank';
