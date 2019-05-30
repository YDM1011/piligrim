import { Component, OnInit } from '@angular/core';
// import {UploadService} from "../../commponents/upload/upload.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contact;
  public contactModel = {
    name: '',
    email: '',
    mobile: '',
    massenger: '',
    masseg: '',
    files: [],
  };

  constructor( ) { }
  // constructor( private uupload: UploadService ) { }


  ngOnInit() {
    this.contact = Object.assign({}, this.contactModel);
    this.contact.files = [];
  }
  onFs(v) {
    console.log(v);
  }

}
