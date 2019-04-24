import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {

  @Input() move
  rate:number
  date:string
  constructor(private bitcoinService:BitcoinService) { }
  ngOnInit() {
    this.bitcoinService.rateSubject.subscribe(newRate => this.rate = newRate)
    this.date = moment.unix(this.move.at).format('D') + '.' + moment.unix(this.move.at).format('M') + '.' + moment.unix(this.move.at).format('YYYY') + ' ' + moment.unix(this.move.at).format('H') + ':' + moment.unix(this.move.at).format('mm') + ':' + moment.unix(this.move.at).format('ss')
  }

}
