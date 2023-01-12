import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DefaultComponent } from './components/default/default.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardModule,
  ],
  exports: [
    DefaultComponent
  ]
})
export class LayoutModule { }
