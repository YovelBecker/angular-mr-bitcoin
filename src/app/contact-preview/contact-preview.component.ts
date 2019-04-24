import { Component, OnInit, Input } from '@angular/core';
import Contact from '../models/Contact';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }

  @Input() contact:Contact
  img:string = 'yovel'
  ngOnInit() {
  }
}
