import { Component, OnInit, Input } from '@angular/core';
import Contact from '../models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
  constructor() { }

  @Input() contacts:Contact[]
  ngOnInit() {
  }
}
