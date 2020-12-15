import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'list-doctor',
    loadChildren: () => import('./doctor/list-doctor/list-doctor.module').then( m => m.ListDoctorPageModule)
  },
  {
    path: 'add-doctor',
    loadChildren: () => import('./doctor/add-doctor/add-doctor.module').then( m => m.AddDoctorPageModule)
  },
  {
    path: 'dashboard-retailer',
    loadChildren: () => import('./retailer/dashboard-retailer/dashboard-retailer.module').then( m => m.DashboardRetailerPageModule)
  },
  {
    path: 'list-booking',
    loadChildren: () => import('./booking/list-booking/list-booking.module').then( m => m.ListBookingPageModule)
  },
  {
    path: 'today-bookings',
    loadChildren: () => import('./retailer/today-bookings/today-bookings.module').then( m => m.TodayBookingsPageModule)
  },
  {
    path: 'prescriptions',
    loadChildren: () => import('./retailer/prescriptions/prescriptions.module').then( m => m.PrescriptionsPageModule)
  },
  {
    path: 'help-desk',
    loadChildren: () => import('./retailer/help-desk/help-desk.module').then( m => m.HelpDeskPageModule)
  },
  {
    path: 'dashboard-customer',
    loadChildren: () => import('./customer/dashboard-customer/dashboard-customer.module').then( m => m.DashboardCustomerPageModule)
  },
  {
    path: 'customer-search-doctor',
    loadChildren: () => import('./customer/customer-search-doctor/customer-search-doctor.module').then( m => m.CustomerSearchDoctorPageModule)
  },
  {
    path: 'customer-book-view',
    loadChildren: () => import('./customer/customer-book-view/customer-book-view.module').then( m => m.CustomerBookViewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
