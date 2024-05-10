import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-heavy-loaders',
  standalone:true,
  imports: [CommonModule, TitleComponent],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]">
  Heavy Loaders Slow
  </section>
  `

})
export class HeavyLoadersComponent {

  @Input({ required: true }) cssClass!: string;
  
  constructor(){
    const start = Date.now();
    while(Date.now() - start < 3000){}
  }
}
