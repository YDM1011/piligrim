import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  public orderId: string;
  public order;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.getOneOrder()
  }
  getOneOrder(){
    this.api.get(`applications/${this.orderId}`)
      .then((v:any) => {
        this.order = v;
      })
      .catch(e=>{ console.log(e) })
  }
  close(){
    this.router.navigate(['/admin']);
  }

}
