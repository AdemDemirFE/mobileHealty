export interface ILookUp {
  id?: number;
  aciklama?: string;
  ceviriKodu?: string;
  grupMu?: boolean;
  grupId?: number;
  kodu?: string;
  degeri?: string;
}

export class LookUp implements ILookUp {
  constructor(
    public id?: number,
    public aciklama?: string,
    public ceviriKodu?: string,
    public grupMu?: boolean,
    public grupId?: number,
    public kodu?: string,
    public degeri?: string
  ) {
    this.grupMu = this.grupMu || false;
  }
}
