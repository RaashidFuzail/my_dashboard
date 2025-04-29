
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet, RouterLinkActive, RouterModule} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MatButtonModule, MatIcon, MatSidenavModule, RouterLink, RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  onClickNavigationMenu() {
    
  }
}
