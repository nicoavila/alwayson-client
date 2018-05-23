import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public token;
  public currentUser;
  public users = [];

  constructor(
    private api: ApiService,
    private storage: StorageService
  ) {
    this.currentUser = this.storage.getCurrentUser();
    this.token = this.currentUser.token;
  }

  ngOnInit() {
    this.api.getUsuarios(this.token).subscribe((usuarios: any) => {
      this.users = usuarios.data;
    });
  }

}
