import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { Auth0Service } from './services/auth0/auth0.service';
import { StorageService } from './services/storage/storage.service';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterializeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'ingresar', pathMatch: 'full' },
      { path: 'ingresar', component: LoginComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '404'}
    ]),
  ],
  providers: [
    ApiService,
    Auth0Service,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
