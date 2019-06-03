import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  public id;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(params => this.id = params.id);
  }
}
