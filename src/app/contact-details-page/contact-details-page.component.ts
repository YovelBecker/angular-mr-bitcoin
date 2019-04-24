import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Contact.service';
import Contact from '../models/Contact';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import Move from '../models/move';
import { UserService } from '../user.service';
import User from '../models/user';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private _location: Location,
    private userService: UserService) {
  }

  moveList: Move[]
  user: User
  contactId: string
  contact: Observable<Contact>
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactId = params['id']
      this.contact = this.contactService.getContactById(this.contactId)
      this.userService.userSubject.subscribe(user => {
        this.user = user
        this.moveList = this.user.moves.filter(move => {
          return move.toId === this.contactId
        })
      })
    })
  }
}