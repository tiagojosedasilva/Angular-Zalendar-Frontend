import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: 'companies', loadChildren: () => import('./modules/company/company.module').then(m => m.CompanyModule) },
  // { path: 'employees', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) },
  // { path: 'services', loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule) },
  // { path: 'appointments', loadChildren: () => import('./modules/appointment/appointment.module').then(m => m.AppointmentModule) },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home)}, // Removida a barra '/' antes de 'home'
  { path: 'calendar', loadComponent: () => import('./pages/calendar/calendar').then(m => m.Calendar)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
