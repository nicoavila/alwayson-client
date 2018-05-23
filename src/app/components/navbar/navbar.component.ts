import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/auth0/auth0.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth0: Auth0Service
  ) { }

  ngOnInit() {
  }

  public salir() {
    console.log('Cerrar sesión');
    this.auth0.logout();
  }
}
