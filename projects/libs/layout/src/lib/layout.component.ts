import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [CommonModule, SidenavComponent],
  template: `
    <layout-sidenav />
    <p>
      layout works!
    </p>
  `,
  styles: ``
})
export class LayoutComponent {

}
