import { Component, OnInit, ɵConsole } from '@angular/core';
import { ContactService } from '../Contact.service';
import Contact from '../models/Contact';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  contact: Contact = new Contact()
  imgPath: string = this._makeId()
  ngOnInit() {
    this.route.params.subscribe(params => {
      if(!params['id']) return
      this.contactService.getContactById(params['id']).subscribe(currContact => {
        this.contact = currContact
        this.imgPath = this.contact._id
      })
    })
  }

  addContact(event) {
    if (!this.contact.name || !this.contact.phone || !this.contact.email) return
    this.contactService.saveContact(this.contact)
    this.router.navigate(['/contact']);
  }
  
  deleteContact(){
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact']);
  }

  private _makeId(length = 10) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }

}
