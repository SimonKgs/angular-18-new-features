import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      <h1>Heavy Slow</h1>

    </section>
  `,
})
export class HeavyLoadersSlowComponent {


  @Input({ required: true }) cssClass!: string;

  constructor(){
    console.log('Heavyy loader component');


    const start = Date.now();
    while( Date.now() - start < 3000){}
  
    console.log('loaded');

  }

}
