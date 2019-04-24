import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import User from '../models/user';
import Contact from '../models/Contact';
import Move from '../models/move';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  @Input() contactObserv:Observable<Contact>
  @Input() maxCoins:number
  error:any = {
    isActive: false,
    msg:''
  }
  amount:number
  user:User
  contact:Contact
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.contactObserv.subscribe(contact => this.contact = contact)
    this.userService.userSubject.subscribe(user => {
      this.user = user
      this.maxCoins = this.user.coins
    })
  }
  onTransferCoins(){
    if(this.maxCoins < 1 ||this.amount >= this.maxCoins){
      this.error.isActive = true
      if(this.maxCoins < 1 ){
        this.error.msg=`You are out of Bitcoin`
      }else{
        this.error.msg=`You only have Ƀ ${this.maxCoins}`
      }
      return
    }
    debugger
    this.error.isActive = false
    this.userService.addMove(new Move(this.contact._id, this.contact.name, new Date().getTime(), this.amount))
  }
}
