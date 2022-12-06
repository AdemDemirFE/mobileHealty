import { Moment } from 'moment';
import { ICihaz } from './cihaz.model';
import { IParametre } from './parametre.model';

export interface IParametreGrup {
  id?: number;
  aciklama?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  cihazs?: ICihaz[];
  parametres?: IParametre[];
}

export class ParametreGrup implements IParametreGrup {
  constructor(
    public id?: number,
    public aciklama?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public cihazs?: ICihaz[],
    public parametres?: IParametre[]
  ) {}
}
