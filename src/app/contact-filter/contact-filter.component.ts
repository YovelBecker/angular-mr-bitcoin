import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() filterEmitter = new EventEmitter<string>();
  constructor() { }
  
  search:string = ''
  ngOnInit() {
  }

  filterInput(filter){
    this.filterEmitter.emit(filter)
  }

}
