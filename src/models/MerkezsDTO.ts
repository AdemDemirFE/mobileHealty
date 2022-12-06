export interface IMerkezsDTO{
    id: number;
    merkezAdi: string;
    aciklama: string;
    tipi: any;
    hbysEslesmeKodu: string;
    aktifMi: boolean;
    ulke: string;
    sehir: string;
    adres: string;
    postaKodu: string;
    logo: any;
    logoContentType: any;
    logoYolu: any;
    telefon: string;
    skype: string;
    fax: string;
    konum: any;
    olusturan: string;
    olusturmaTarihi: any;
    guncelleyen: any;
    guncelemeTarihi: any;
    hastas: any;
    belges: any;
    kullanicis: any;
    kurum: IKurum;
}

interface IKurum{
    id: number;
    kurumAdi: string;
    kodu: string;
    aciklama: string;
    yetkili: string;
    ulke: string;
    sehir: string;
    adres: string;
    postaKodu: string;
    logo: any;
    logoContentType: any;
    logoYolu: any;
    telefon: string;
    fax: string;
    konum: any;
    hbysKullanici: any;
    hbysSifre: any;
    olusturan: any;
    olusturmaTarihi: any;
    guncelleyen: any;
    guncelemeTarihi: any;
    kurumErisims: any;
    belges: any;
    kullanicis: any;
    entengreHbys:IEntegreHbys;
}

interface IEntegreHbys{
    id: number;
    kodu: string;
    aciklama: string;
    servisUrl1: string;
    servisUrl2: string;
    sslDurumu: boolean
    tipi: any;
    aktifMi: boolean;
    olusturan: any;
    olusturmaTarihi: any;
    guncelleyen: any;
    guncelemeTarihi: any;
    paramEslesmes: any;
}