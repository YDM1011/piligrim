import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authUser = {
    login: '',
    pass: ''
  };

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  signin(e) {
    e.preventDefault();
    this.auth.signin(this.authUser).then(value => {
      if (value) {
        this.router.navigate(['/admin']);
      }
    });
    console.log('errr')
  }
}
