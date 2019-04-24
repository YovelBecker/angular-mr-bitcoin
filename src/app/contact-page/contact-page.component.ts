import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Contact.service';
import Contact from '../models/Contact'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService:ContactService) { }
  contacts:Array<Contact>
  ngOnInit() {
    this.contactService.contactsSubject.subscribe((contacts)=>{
      this.contacts = contacts;
    })
    this.contactService.getContacts();
  }
  filterContacts(term:string){
    this.contactService.getContacts({term})
  }
}
