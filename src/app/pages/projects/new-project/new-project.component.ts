import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { StorageService } from '../../../services/storage/storage.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  public currentUser;
  public token;

  public newProjectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router
  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
  }

  ngOnInit() {
  }

  public nuevoProyecto(form) {
    this.api.createProyecto(this.token, form).subscribe(() => {
      this.router.navigateByUrl('/dashboard/proyectos');
    });
  }
}
