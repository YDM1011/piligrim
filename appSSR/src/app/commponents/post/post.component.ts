import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() id;
  constructor(private route: ActivatedRoute) {
    this.route.params
        .subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

}
