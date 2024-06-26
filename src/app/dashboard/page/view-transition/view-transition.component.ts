import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone:true,
  imports: [CommonModule, TitleComponent],
  template: `

  <app-title title="View Transition" />

  <section class="flex justify-start">
    <img
      src="https://pixabay.com/es/illustrations/ai-generado-border-collie-perro-8730411/"
      alt="perrito"
      width="200"
      height="300"
      style="view-transition-name: hero1"
      />

      <div class="bg-blue-500 w-56 h-56">

      </div>
  </section>

  `,

})
export default class ViewTransitionComponent {}
