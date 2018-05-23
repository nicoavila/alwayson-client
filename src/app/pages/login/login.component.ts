import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Service } from '../../services/auth0/auth0.service';
import { ApiService } from '../../services/api/api.service';
import { StorageService } from '../../services/storage/storage.service';
import { GlobalStatusService } from '../../services/global-status/global-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth0: Auth0Service,
    private storage: StorageService,
    private api: ApiService,
    private router: Router,
    public globalStatus: GlobalStatusService
  ) {
    this.auth0.parseHash((error, auth0Data) => {
      if (error) {
        console.log(error);
      }

      if (auth0Data) {
        //console.log(auth0Data.idToken);
        this.globalStatus.isLoading = true;
        let datos = {
          auth0_user_id: auth0Data.idTokenPayload.sub
        };
        this.api.informacionAuth0(auth0Data.idToken, datos).subscribe((resultado:any) => {
          const name = resultado.data.user_metadata.name;
          const lastname = resultado.data.user_metadata.lastname;

          //Guarda la información de autenticación del usuario
          this.storage.saveUser(
            auth0Data.idToken,
            name,
            lastname,
            auth0Data.idTokenPayload.picture,
            auth0Data.idTokenPayload.sub,
            auth0Data.idTokenPayload.email
          );
          this.globalStatus.isLoading = false;
          this.router.navigateByUrl('/dashboard');
        });
      }
    })
  }

  ngOnInit() {
  }

  public login() {
    this.globalStatus.isLoading = true;
    this.auth0.login(window.location.href);
  }
}
