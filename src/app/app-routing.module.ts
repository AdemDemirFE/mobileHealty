import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  
  {
    path: 'select-lang',
    loadChildren: () => import('./pages/select-lang/select-lang.module').then(m => m.SelectLangPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'home-egitmen',
    loadChildren: () => import('./pages/home-egitmen/home-egitmen.module').then( m => m.HomeEgitmenPageModule)
  },
  {
    path: 'modal-ogrenci-filter',
    loadChildren: () => import('./pages/home-egitmen/modal-ogrenci-filter/modal-ogrenci-filter.module').then( m => m.ModalOgrenciFilterPageModule)
  },
  {
    path: 'kullanim-sozlesmesi',
    loadChildren: () => import('./pages/kullanim-sozlesmesi/kullanim-sozlesmesi.module').then(m => m.KullanimSozlesmesiPageModule)
  },
  {
    path: 'ogrenci-menu',
    loadChildren: () => import('./pages/ogrenci-menu/ogrenci-menu.module').then( m => m.OgrenciMenuPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./pages/password-change/password-change.module').then( m => m.PasswordModalChangePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
