import { IBirey } from "./birey.model";


export interface IAkraba {
  id?: number;
  aciklama?: string;
  kodu?: string;
  bireys?: IBirey[];
}

export class Akraba implements IAkraba {
  constructor(public id?: number, public aciklama?: string, public kodu?: string, public bireys?: IBirey[]) {}
}
