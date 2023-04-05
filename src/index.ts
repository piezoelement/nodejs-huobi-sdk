import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import { config } from 'dotenv';
import { env } from 'process';
import { HuobiSDK } from './HuobiSDK.js';
dayjs.extend(utc);

config();

const BASE_URL = 'https://api.huobi.pro';

const huobi = new HuobiSDK(BASE_URL, env.KEY!, env.SECRET!);


console.log(await huobi.getStatus())

// const { list } = await huobi.getBalance(55784196);
