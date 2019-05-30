import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private domain = environment.api + 'api/';

  private user = new BehaviorSubject<any>(null);
  public onLogin = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {

  }

  signin(data) {
    return new Promise((rs, rj) => {
      this.http.post(`${this.domain}signin`, data).subscribe((v: any) => {
        if (v) {
          this.user.next(v);
          rs(v);
        }
      }, e => rj(e));
    });
  }
  isAuth() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
}
