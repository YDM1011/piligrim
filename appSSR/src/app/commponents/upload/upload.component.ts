import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from "@angular/material";
import { UploadService } from "./upload.service";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit{
  constructor(public dialog: MatDialog,
              public uploadService: UploadService) {}

  ngOnInit(){

  }
  openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

}
