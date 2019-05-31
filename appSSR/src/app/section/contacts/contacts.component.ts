import { Component, OnInit } from '@angular/core';
import {UploadService} from "../../commponents/upload/upload.service";
import {ApiService} from "../../api.service";
import Swal from 'sweetalert2'

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

  constructor(
    private uploadService: UploadService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.initNewForm();
    this.contact.files = [];
    this.uploadService.onFs.subscribe(v=>{
      if (v){
        this.contact.files.push(v);
        console.log(v);
      }
    })
  }

  send(e){
    e.preventDefault();
    this.api.post('Applications', this.contact)
      .then(value => {
        Swal.fire('Thanks!', '', 'success')
      });
    this.initNewForm();
  }

  initNewForm(){
    this.contact = Object.assign({},this.contactModel);
  }

}
