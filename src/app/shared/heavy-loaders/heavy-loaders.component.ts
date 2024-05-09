import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders',
  standalone:true,
  imports: [CommonModule],
  template: `<h1>Hola Mundo</h1>`

})
export class HeavyLoadersComponent {}
