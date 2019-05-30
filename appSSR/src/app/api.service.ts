import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private domain = environment.api + 'api/';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {

  }

  get(api) {
    return new Promise((rs,rj)=>{
      this.http.get(`${this.domain}${api}`).subscribe((v:any)=>{
        if (v) {
          rs(v)
        }
      }, e=>rj(e))
    })
  }

  post(api, data, id = null) {
    return new Promise((rs,rj)=>{
      this.http.post(`${this.domain}${api}${id ? '/'+id : ''}`, data).subscribe((v:any)=>{
        if (v) {
          rs(v)
        }
      }, e=>rj(e))
    })
  }

  delete(api, id = null) {
    return new Promise((rs,rj)=>{
      this.http.delete(`${this.domain}${api}${id ? '/'+id : ''}`).subscribe((v:any)=>{
        if (v) {
          rs(v)
        }
      }, e=>rj(e))
    })
  }
}
