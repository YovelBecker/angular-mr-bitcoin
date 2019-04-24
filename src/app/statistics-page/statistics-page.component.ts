import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.sass']
})
export class StatisticsPageComponent implements OnInit {

  constructor(private bitcoinService:BitcoinService) { }
  lineColors:Array<string> = ['#3b7ad3','#3ad242']
  charts:Array<any> = []
  ngOnInit() {
    this.charts = [this.bitcoinService.getMarketPrice(),this.bitcoinService.getConfirmedTransactions()]
    for (let i = 0; i < this.charts.length; i++) {
      this.charts[i].lineColor = this.lineColors[i]
    }
  }
}
