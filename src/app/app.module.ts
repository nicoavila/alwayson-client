import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { Auth0Service } from './services/auth0/auth0.service';
import { StorageService } from './services/storage/storage.service';
import { GlobalStatusService } from './services/global-status/global-status.service';
import { MaterializeModule } from 'angular2-materialize';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    LoadingComponent,
    ProjectsComponent,
    SummaryComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterializeModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rotatingPlane,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      fullScreenBackdrop: true,
      primaryColour: 'rgba(0,0,0,0.3)',
      secondaryColour: 'rgba(0,0,0,0.2)',
      tertiaryColour: 'rgba(0,0,0,0.1)'
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'ingresar', pathMatch: 'full' },
      { path: 'ingresar', component: LoginComponent },
      { path: 'dashboard', component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'resumen', pathMatch: 'full' },
          { path: 'resumen', component: SummaryComponent },
          { path: 'proyectos', component: ProjectsComponent },
          { path: 'usuarios', component: UsersComponent },
        ]
      },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '404'}
    ]),
  ],
  providers: [
    ApiService,
    Auth0Service,
    StorageService,
    GlobalStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
