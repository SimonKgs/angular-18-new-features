import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, Users } from '@interfaces/req-res';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  #http = inject( HttpClient )

  // # makes the state private 
  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.#state().users )
  public loading = computed( () => this.#state().loading )

  constructor() {

    this.#http.get<Users>('https://reqres.in/api/users')
    .pipe( delay(1500) )
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      });
   }

   getUserById(id: string) {
    return this.#http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe( 
      delay(1500),
      map( resp => resp.data )
     );
    
   }
}
