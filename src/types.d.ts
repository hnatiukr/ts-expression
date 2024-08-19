import { CAR, CDR } from './index';

export type CarMessage = typeof CAR;

export type CdrMessage = typeof CDR;

export type Cons<CAR, CDR> = {
  init: boolean;
  (message: CarMessage): CAR;
  (message: CdrMessage): CDR;
};
