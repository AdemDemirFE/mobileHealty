import { Moment } from 'moment';

export interface IHasta {
    token?: string;
    id?: number;
    ad?: string;
    soyad?: string;
    kimlikNo?: string;
    telefon?: string;
    cinsiyet?: string;
    dogumTarihi?: any;
    hbysHastaNo?: number;
    resimContentType?: string;
    resim?: any;
    resimYolu?: string;
    email?: string;
    olumTarihi?: Moment;
    durum?: string;
    aciklama?: string;
    uyruk?: string;
    kanGrubu?: string;
    olusturan?: string;
    olusturmaTarihi?: Moment;
    guncelleyen?: string;
    guncelemeTarihi?: Moment;
    merkez?:Object

}

export class Hasta implements IHasta {
    constructor(
        public id?: number,
        public ad?: string,
        public soyad?: string,
        public kimlikNo?: string,
        public telefon?: string,
        public cinsiyet?: string,
        public dogumTarihi?: any,
        public hbysHastaNo?: number,
        public resimContentType?: string,
        public resim?: any,
        public resimYolu?: string,
        public email?: string,
        public olumTarihi?: Moment,
        public durum?: string,
        public aciklama?: string,
        public uyruk?: string,
        public kanGrubu?: string,
        public olusturan?: string,
        public olusturmaTarihi?: Moment,
        public guncelleyen?: string,
        public guncelemeTarihi?: Moment
    ) { }
}
