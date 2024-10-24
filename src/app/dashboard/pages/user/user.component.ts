import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-res';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if( user() ) {

      <section>
        <img 
          [alt]="user()!.first_name" 
          [srcset]="user()!.avatar" 
        /> 
      </section>


      <div>
        <h3>
          {{ titleLabel() }}
        </h3>
        <P>{{  user()!.email }}</P>
      </div>


    } @else {
      <p>Loading...</p>
    } 
  ` 
})
export default class UserComponent {

  private route = inject( ActivatedRoute )
  private usersService = inject( UsersService )

  public titleLabel = computed( () => (this.user()) ? `${this.user()!.first_name} ${this.user()!.last_name}` : 'User')

  // public user = signal<User| undefined>(undefined)
  
  // Converting observable to signal
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => {
        return this.usersService.getUserById(id);
      })
    )
  );

}
