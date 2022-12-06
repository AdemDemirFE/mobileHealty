import { ICihaz } from './cihaz.model';

export interface ICihazTur {
  id?: number;
  aciklama?: string;
  kodu?: string;
  grupId?: number;
  cihazs?: ICihaz[];
}

export class CihazTur implements ICihazTur {
  constructor(public id?: number, public aciklama?: string, public kodu?: string, public grupId?: number, public cihazs?: ICihaz[]) {}
}
