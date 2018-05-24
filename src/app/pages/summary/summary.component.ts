import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public numeroProyectos = 0;
  public currentUser;
  public token;

  constructor(
    public api: ApiService,
    public storage: StorageService
  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
  }

  ngOnInit() {
    this.obtieneProyectos();
  }

  private obtieneProyectos() {
    console.log('Obteniendo número de proyectos...');
    this.numeroProyectos = 0;
    this.api.getProyectos(this.token).subscribe((proyectos: any) => {
      proyectos.data.forEach((proyectos) => {
        this.numeroProyectos++;
      });
    });
  }

  public actualizar() {
    console.log('Evento recibido!');
    this.obtieneProyectos();
  }

}
