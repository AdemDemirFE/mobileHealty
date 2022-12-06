import { Moment } from 'moment';
import { IEntengreHbys } from './entengre-hbys.model';
import { IParametre } from './parametre.model';

export interface IParamEslesme {
  id?: number;
  eslesmeKodu?: string;
  hbysRenk?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  entengreHbys?: IEntengreHbys;
  parametre?: IParametre;
}

export class ParamEslesme implements IParamEslesme {
  constructor(
    public id?: number,
    public eslesmeKodu?: string,
    public hbysRenk?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public entengreHbys?: IEntengreHbys,
    public parametre?: IParametre
  ) {}
}
