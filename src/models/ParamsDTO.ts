export interface IParamsDTO{
    id : number;
    tipi : any,
    eslesmeKodu: number;
    siraNo : number;
    aciklama : string;
    aktifMi : boolean;
    referansAlt : any;
    referansUs : any;
    renk : any;
    olusturan : string;
    olusturmaTarihi : any;
    guncelleyen :  any;
    guncelemeTarihi :  any;
    paramEslesmes :  any;
    sonuclars :  any;
    parametreGrup :ParamGroupDTO
}

interface ParamGroupDTO {
    id : number;
    aciklama : string,
    olusturan : string;
    olusturmaTarihi : any;
    guncelleyen :  any;
    guncelemeTarihi :  any;
  }