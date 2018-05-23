import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';
import { StorageService } from '../../../services/storage/storage.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  public currentUser;
  public token;
  public id;

  public editProjectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.api.getProyecto(this.token, params.id).subscribe((project: any) => {
        this.editProjectForm.setValue({
          name: project.data.name,
          start_date: project.data.start_date,
          end_date: project.data.end_date,
          description: project.data.description
        });
      });
    });
  }

  public editarProyecto(form) {
    this.api.editProyecto(this.token, this.id, form).subscribe(() => {
      this.router.navigateByUrl('/dashboard/proyectos');
    });
  }
}
