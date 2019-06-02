import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {
  public id;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params
        .subscribe(params => this.id = params.id);
  }
}
