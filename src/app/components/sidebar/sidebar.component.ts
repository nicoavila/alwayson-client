import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public user;

  constructor(
    public storage: StorageService
  ) {
    this.user = this.storage.getCurrentUser();
  }

  ngOnInit() {
  }

}
