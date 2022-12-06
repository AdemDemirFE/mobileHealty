import { Moment } from 'moment';
import { IBildirim } from './bildirim.model';
import { IBelge } from './belge.model';
import { IMobilCihazlar } from './mobil-cihazlar.model';
import { IGorusmeDetay } from './gorusme-detay.model';
import { IRandevuKatilimci } from './randevu-katilimci.model';
import { IMerkez } from './merkez.model';
import { IKurum } from './kurum.model';
import * as moment from 'moment';

export interface IKullanici {
  id?: number;
  kullaniciAdi?: string;
  sifreHash?: string;
  ad?: string;
  soyad?: string;
  email?: string;
  kimlikNo?: string;
  doktorMu?: boolean;
  yetkiGrupId?: number;
  telefon?: string;
  resimContentType?: string;
  resim?: any;
  resimYolu?: string;
  ozgecmis?: string;
  dogumTarihi?: any;
  hbysKullanici?: string;
  titresimAktif?: boolean;
  sesAktif?: boolean;
  bildirimAktif?: boolean;
  tumHastalariGorebilir?: boolean;
  yoneticiMi?: boolean;
  musHizmetleriMi?: boolean;
  pasifMi?: boolean;
  pasifNedeni?: string;
  pasifEden?: string;
  kullaniciId?: number;
  tipi?: number;
  sifreTarihi?: Moment;
  sifreSuresi?: number;
  sifreDegistirebilir?: boolean;
  sonOturumTarihi?: Moment;
  oturumSayisi?: number;
  hataliSifreSayisi?: number;
  bildirims?: IBildirim[];
  belges?: IBelge[];
  mobilCihazlars?: IMobilCihazlar[];
  gorusmeDetays?: IGorusmeDetay[];
  randevuKatilimcis?: IRandevuKatilimci[];
  merkezs?: IMerkez[];
  kurums?: IKurum[];
  secim?:boolean;
}

export class Kullanici implements IKullanici {
  constructor(
    public id?: number,
    public kullaniciAdi?: string,
    public sifreHash?: string,
    public ad?: string,
    public soyad?: string,
    public email?: string,
    public kimlikNo?: string,
    public doktorMu?: boolean,
    public yetkiGrupId?: number,
    public telefon?: string,
    public resimContentType?: string,
    public resim?: any,
    public resimYolu?: string,
    public ozgecmis?: string,
    public dogumTarihi?: any,
    public hbysKullanici?: string,
    public titresimAktif?: boolean,
    public sesAktif?: boolean,
    public bildirimAktif?: boolean,
    public tumHastalariGorebilir?: boolean,
    public yoneticiMi?: boolean,
    public musHizmetleriMi?: boolean,
    public pasifMi?: boolean,
    public pasifNedeni?: string,
    public pasifEden?: string,
    public kullaniciId?: number,
    public tipi?: number,
    public sifreTarihi?: Moment,
    public sifreSuresi?: number,
    public sifreDegistirebilir?: boolean,
    public sonOturumTarihi?: Moment,
    public oturumSayisi?: number,
    public hataliSifreSayisi?: number,
    public bildirims?: IBildirim[],
    public belges?: IBelge[],
    public mobilCihazlars?: IMobilCihazlar[],
    public gorusmeDetays?: IGorusmeDetay[],
    public randevuKatilimcis?: IRandevuKatilimci[],
    public merkezs?: IMerkez[],
    public kurums?: IKurum[],
    public secim?:boolean
  ) 
  {
    
    this.id = this.id || null ;
    this.kullaniciAdi = this.kullaniciAdi || null ;
    this.sifreHash =  this.sifreHash || null;
    this.ad =  this.ad || null;
    this.soyad =  this.soyad || null;
    this.email =  this.email || null;
    this.kimlikNo = this.kimlikNo || null ;
    this.doktorMu = this.doktorMu || false,
    this.yetkiGrupId =  this.yetkiGrupId || null;
    this.telefon = this.telefon || null ;
    this.resimContentType = this.resimContentType || null ;
    this.resim = this.resim || null ;
    this.resimYolu = this.resimYolu || null ;
    this.ozgecmis =this.ozgecmis || null  ;
    this.dogumTarihi =this.dogumTarihi || null;
    this.hbysKullanici = this.hbysKullanici || null ;
    this.titresimAktif = this.titresimAktif || false;
    this.sesAktif = this.sesAktif || false;
    this.bildirimAktif = this.bildirimAktif || false;
    this.tumHastalariGorebilir = this.tumHastalariGorebilir || false;
    this.yoneticiMi = this.yoneticiMi || false;
    this.musHizmetleriMi = this.musHizmetleriMi || false;
    this.pasifMi = this.pasifMi || false;
    this.pasifNedeni = this.pasifNedeni || null ;
    this.pasifEden = this.pasifEden || null ;
    this.kullaniciId = this.kullaniciId || -1 ;
    this.tipi =this.tipi || null  ;
    this.sifreTarihi =  this.sifreTarihi || moment(new Date()) ;
    this.sifreSuresi = this.sifreSuresi || 500 ;
    this.sifreDegistirebilir = this.sifreDegistirebilir || false;
    this.sonOturumTarihi =this.sonOturumTarihi || null  ;
    this.oturumSayisi = this.oturumSayisi || null ;
    this.hataliSifreSayisi = this.hataliSifreSayisi || null ;
    this.bildirims = this.bildirims || null;
    this.belges = this.belges || null;
    this.mobilCihazlars = this.mobilCihazlars || null;
    this.gorusmeDetays =this.gorusmeDetays || null;
    this.randevuKatilimcis = this.randevuKatilimcis || null;
    this.merkezs = this.merkezs || null;
    this.kurums = this.kurums || null;
    this.secim = this.secim || false;
      }
}
