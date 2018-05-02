import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/auth0/auth0.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth0: Auth0Service
  ) {
    this.auth0.parseHash((error, auth0Data) => {
      if (error) {
        console.log(error);
      }

      if (auth0Data) {
        console.log(auth0Data);
      }
    })
  }

  ngOnInit() {
  }

  public login() {
    this.auth0.login(window.location.href);
  }
}
