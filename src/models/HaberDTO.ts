export interface IHaberDTO {
    id: number,
    kayitTarihi: any,
    resim: any,
    resimContentType: any,
    resimYolu: String,
    baslik: String,
    icerik: String,
    videoYolu: String,
    olusturan: String,
    olusturmaTarihi: any,
    guncelleyen: String,
    guncelemeTarihi: any,
    belges: any,
    haberGrup: IHaberGrup
}

interface IHaberGrup {
    id: number,
    dil: String,
    aciklama: String,
    olusturan: String,
    olusturmaTarihi: Date,
    guncelleyen: any,
    guncelemeTarihi: Date
}