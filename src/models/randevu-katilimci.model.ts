import { Moment } from 'moment';
import { IRandevu } from './randevu.model';
import { IHasta } from './hasta.model';
import { IKullanici } from './kullanici.model';

export interface IRandevuKatilimci {
  id?: number;
  katilimciId?: number;
  katilimciAdi?: string;
  katilimciTipi?: number;
  katilimciMesaj?: string;
  katilimDurumu?: number;
  onayTarihi?: Moment;
  iptalTarihi?: Moment;
  iptalNedeni?: string;
  randevu?: IRandevu;
  hasta?: IHasta;
  kullanici?: IKullanici;
}

export class RandevuKatilimci implements IRandevuKatilimci {
  constructor(
    public id?: number,
    public katilimciId?: number,
    public katilimciAdi?: string,
    public katilimciTipi?: number,
    public katilimciMesaj?: string,
    public katilimDurumu?: number,
    public onayTarihi?: Moment,
    public iptalTarihi?: Moment,
    public iptalNedeni?: string,
    public randevu?: IRandevu,
    public hasta?: IHasta,
    public kullanici?: IKullanici
  ) {}
}
