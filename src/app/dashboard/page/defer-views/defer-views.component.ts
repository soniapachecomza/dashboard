import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersComponent } from '@shared/heavy-loaders/heavy-loaders.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone:true,
  imports: [CommonModule, HeavyLoadersComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  
})
export default class DeferViewsComponent {


  
}
