import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: 'tab2',
            loadChildren: () =>
              import('../home-egitmen/home-egitmen.module').then( m => m.HomeEgitmenPageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: 'tab3',
            loadChildren: () =>
            import('../ogrenci-menu/ogrenci-menu.module').then( m => m.OgrenciMenuPageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: 'tab4',
            loadChildren: () =>
            import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {} 
