import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from './pages/layout/layout.component';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatSidenavModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_dashboard';
  onClickNavigationMenu() {

  }
}
