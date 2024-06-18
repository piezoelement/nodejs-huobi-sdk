import Webws from 'ws';
import Pako from 'pako';
import { HuobiSDK } from './HuobiSDK.js';
import { config } from 'dotenv';
import { env } from 'process';
config();

const ws = new Webws('wss://api.huobi.pro/ws');

const huobiClient = new HuobiSDK('https://api.huobi.pro', 'wss://api.huobi.pro', env.KEY!, env.SECRET!);

const body = huobiClient.getBody();
const signature = huobiClient.getSignature('GET', '/ws/v1', body);
const authData = { ...body, Signature: signature, op: 'auth' };

ws.on('open', () => {
  '{"sub": "market.btcusdt.ticker"}';
  ws.send(JSON.stringify({ sub: 'market.btcusdt.ticker' }));
  // ws.send(authData);
});

ws.on('message', (data: any) => {
  const text = Pako.inflate(data, { to: 'string' });
  const message = JSON.parse(text);
  console.log(message);
  if (message.ping) {
    ws.send(JSON.stringify({ pong: message.ping }));
  } else if (message.tick) {
    console.log(message);
  } else {
    console.log(text);
  }
});

// export { HuobiSDK } from './HuobiSDK.js';
