import { Component } from '@angular/core';
import User from './models/user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'mister-bitcoin';
  user:User
  constructor(private userService:UserService, private router: Router){
    this.userService.userSubject.subscribe(user => {
      this.user = user
    if(!this.user) this.router.navigate(['signup'])
  })
  }
}
