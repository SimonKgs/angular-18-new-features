import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  // OnPush will trigger only if an input property changes
  // or an event trigger inside the component is fired or
  // when a signal changes
  // default checks the full component instead of the values
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>
      {{ frameworkAsSignal() | json }} 
    </pre>
    <pre>
      {{ frameworkAsProperty | json }}
    </pre>
 

  `,
})
export default class ChangeDetectionComponent {


  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }

  constructor() {
    setTimeout( () => {

      // Using Change strategy OnPush
      // it will update only the property with the signal
      // this.frameworkAsSignal.set({name: 'React', releaseDate: 2020})
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React', 
      }))
      // this.frameworkAsProperty.name = 'React'

      console.log('Done');
    }, 3000)
  }

}
