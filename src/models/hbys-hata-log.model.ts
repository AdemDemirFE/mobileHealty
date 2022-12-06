import { Moment } from 'moment';

export interface IHbysHataLog {
  id?: number;
  uygulamaAdi?: string;
  servis?: string;
  servisParamJson?: string;
  servisYolu?: string;
  tarih?: Moment;
  hataKodu?: string;
  hata?: string;
}

export class HbysHataLog implements IHbysHataLog {
  constructor(
    public id?: number,
    public uygulamaAdi?: string,
    public servis?: string,
    public servisParamJson?: string,
    public servisYolu?: string,
    public tarih?: Moment,
    public hataKodu?: string,
    public hata?: string
  ) {}
}
