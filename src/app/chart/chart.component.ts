import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor() { }
  myOptions: any = {
    fontColor:'#fff',
    backgroundColor: 'transparent',
    is3D: true,
  };
  @Input() lineColor: string
  @Input() chartData: any[]
  @ViewChild('googleChart') googleChart;
  ngOnInit() {
    this.myOptions.colors = [this.lineColor]
  }
}
