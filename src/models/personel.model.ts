export interface Personel {
    id?: number,
    kullaniciId?: number,
    ad?: string,
    soyad?: string,
    tcKimlikNo?: string,
    doktorMu?: boolean,
    hemsireMi?: boolean,
    digerMi?: boolean,
    digerAck?: string,
    yetkiGrupId?: number,
    phoneNumber?: string,
    email?: string,
    resimContentType?: string,
    resim?: any,
    hbysUserName?: string,
    titresimAktif?: boolean,
    sesAktif?: boolean,
    bildirimAktif?: boolean,
    olusturanId?: number,
    olusturmaTarh?: any,
    guncelleyenId?: number,
    guncelemeTarh?: any,
    tumHastalariGorebilir?: any
}

export interface IPersonel {
    otoDoktorAtama?: boolean;
    personelTipi?: number;
    personelBirimId?: number;
    diyalizSertifika?: number;
    adi?: string;
    soyadi?: string;
    adSoyad?: string;
    personelId?: number;
    aktif?: boolean;
    unvanId?: number;
}