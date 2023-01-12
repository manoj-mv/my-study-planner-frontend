import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    RegisterFormComponent,
    AuthLayoutComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AuthenticationModule { }
