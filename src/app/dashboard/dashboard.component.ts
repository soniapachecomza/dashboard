import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SlidemenuComponent } from '@shared/slidemenu/slidemenu.component';

@Component({
  standalone:true,
  imports: [ RouterModule, SlidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles:``,
})
export default class DashboardComponent {}
