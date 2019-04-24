import { Component, OnInit, ViewChild } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { UserService } from '../user.service'
import User from '../models/user'
import Move from '../models/move';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService, private userService: UserService) { }
  user: User
  chart: any
  rate: number
  value: number
  moveList: Move[]
  ngOnInit() {
    this.userService.userSubject.subscribe(user => {
      this.user = user
      this.bitcoinService.rateSubject.subscribe(rate => {;
        this.value = this.user.coins * rate
      })
    })
    this.chart = this.bitcoinService.getMarketPrice();
  }

  makeNumberInt(num) {
    return Math.round(num)
  }
  getFormattedNumber(num) {
    return Math.round(num * 1000) / 1000
  }
}
