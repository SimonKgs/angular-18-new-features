import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">
      <img 
        srcset="https://picsum.photos/id/237/200/300" 
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      >

      <div 
        class="bg-blue-800 fixed bottom-16 right-10 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>

    </section>
  `,
})
export default class ViewTransitionComponent {


}
 