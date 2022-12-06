import { IHastaAsi } from "./hasta-asi.model";


export interface IAsi {
  id?: number;
  aciklama?: string;
  kodu?: string;
  donemi?: number;
  tipi?: number;
  hastaAsis?: IHastaAsi[];
}

export class Asi implements IAsi {
  constructor(
    public id?: number,
    public aciklama?: string,
    public kodu?: string,
    public donemi?: number,
    public tipi?: number,
    public hastaAsis?: IHastaAsi[]
  ) {}
}
