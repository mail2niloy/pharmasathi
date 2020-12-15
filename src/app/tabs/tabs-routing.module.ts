import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../auth/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'dashboard-retailer',
        loadChildren: () => import('../retailer/dashboard-retailer/dashboard-retailer.module').then(m => m.DashboardRetailerPageModule)
      },
      {
        path: 'list-doctor',
        loadChildren: () => import('../doctor/list-doctor/list-doctor.module').then(m => m.ListDoctorPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
