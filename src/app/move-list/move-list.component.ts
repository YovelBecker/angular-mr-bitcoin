import { Component, OnInit, Input } from '@angular/core';
import Move from '../models/move';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  @Input() moveList:Move[]
  @Input() isContact:Boolean
  constructor() { }
  ngOnInit() {
  }

}
