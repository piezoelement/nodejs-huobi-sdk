# Installation

```shell
npm install @piezoelement/nodejs-huobi-sdk
yarn add @piezoelement/nodejs-huobi-sdk
```

```shell
cp .env.example .env
```

# Example

```typescript
import { HuobiSDK } from '@piezoelement/nodejs-huobi-sdk';
import process from 'process';

const KEY = process.env.KEY;
const SECRET = process.env.SECRET;
const URL = 'https://api.huobi.pro';

const client = new HuobiSDK(URL, KEY, SECRET);

const accounts = await client.getAccounts();
```
