import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/components/default/default.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { RegisterFormComponent } from './authentication/components/register-form/register-form.component';
import { AuthLayoutComponent } from './authentication/components/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent
  },
  {
    path: 'dashboard', component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/dashboard/dashboard.module').then(
          m => m.DashboardModule
        )
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
