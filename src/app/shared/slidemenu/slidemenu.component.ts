import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../app.routes';
@Component({
  selector: 'app-slidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slidemenu.component.html',

})
export class SlidemenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'));

  constructor() {
    // const dashboardRoutes = routes
    //   .map(route => route.children ?? [])
    //   .flat()
    //   .filter(route => route && route.path)
    //   .filter(route => !route.path?.includes(':'))

    //console.log(dashboardRoutes);

  }

}
