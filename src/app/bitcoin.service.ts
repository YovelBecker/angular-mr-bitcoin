import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import ConfirmedTransactions from './models/confirmedTransactions'
import MarketPrice from './models/marketPrice'
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { 
    this.getRate()
  }

  rateSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public getRate(): void {
    this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${1}`)
      .subscribe(rate => {
        this.rateSubject.next(1 / rate);
      })
  }
  public getMarketPrice() {
    let values = new MarketPrice().values.map(val => {
      return [moment.unix(val.x).format('MMM YY'), val.y]
    });
    let market = new MarketPrice()
    market.values = values
    return market
  }
  public getConfirmedTransactions() {
    let values = new ConfirmedTransactions().values.map(val => {
      return [moment.unix(val.x).format('MMM YY'), val.y]
    });
    let confirmed = new ConfirmedTransactions()
    confirmed.values = values
    return confirmed
  }
  public getMarketPriceByRequest() {
    this.http.get<any>(`https://api.blockchain.info/charts/market-price?timespan=1year&format=json&cors=true`)
      .subscribe(data => {
        let marketPrice = data.values.map(value => value.y)
      })
  }
  public getConfirmedTransactionsbyRequest() {
    this.http.get<any>('https://api.blockchain.info/charts/n-transactions?format=json&cors=true')
      .subscribe(data => {
        let confirmedTransactions = data.values.map(value => value.y)
      })
  }
}
