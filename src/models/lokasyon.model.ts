export interface ILokasyon {
  id?: number;
  tipi?: number;
  aciklama?: string;
  kodu?: string;
  grupId?: number;
}

export class Lokasyon implements ILokasyon {
  constructor(public id?: number, public tipi?: number, public aciklama?: string, public kodu?: string, public grupId?: number) {}
}
