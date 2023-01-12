import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    RouterModule,

    ProfileCardComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
