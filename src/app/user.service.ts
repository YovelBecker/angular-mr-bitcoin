import { Injectable } from '@angular/core';
import User from './models/user';
import Move from './models/move';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router:Router) {
    this.getUser()
   }

  userSubject = new BehaviorSubject<User>(null);
  user:User
  public getUser(): void {
    this.userSubject.next(this.user)
  }

  public signUp(name):void{
    this.user = new User(name)
    this.userSubject.next(this.user)
    this.router.navigate([''])
    console.log(this.user)
  }

  public addMove(move:Move):void{
    this.user.coins -= move.amount
    this.user.moves.unshift(move)
    this.userSubject.next(this.user)
  }
}
