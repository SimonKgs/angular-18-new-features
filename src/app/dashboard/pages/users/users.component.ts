import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {


  public usersService = inject( UsersService )


}
