import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'F'


@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ TitleComponent ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal(false)
  public grade = signal<Grade>('A')
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    // this.showContent.set(!this.showContent())
    this.showContent.update( value => !value)
  }

  public toggleGrade() {
    const myValues: Grade[] = [ 'A', 'B', 'C', 'D' , 'F']
    const randGrade:Grade = myValues[myValues.length * Math.random() | 0] 
    this.grade.update( value => randGrade)
  }

}
