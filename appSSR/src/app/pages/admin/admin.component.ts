import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public orders = [];
  public displayColumns: string [] = [
    'name', 'email', 'mobile', 'massenger', 'massenger', 'masseg', 'action'
  ];

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.getOrders();
  }

  getOrders(){
    this.api.get(`applications?limit=${10}&skip=${this.orders.length}`)
      .then((v:any) => {
        v.map((order, i)=>{
          order['index'] = this.orders.length + i;
        });
        this.orders = v.concat(this.orders);
        // this.renderRows()
      })
      .catch(e=>{ console.log(e) })
  }

  delete(elem){
    this.api.delete(`applications/${elem._id}`)
      .then((v:any) => {
        this.orders.splice(elem.index, 1);
        console.log(this.orders)
      })
      .catch(e=>{ console.log(e) })
  }
}
