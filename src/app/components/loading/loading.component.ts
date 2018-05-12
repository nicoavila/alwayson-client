import { Component, OnInit } from '@angular/core';
import { GlobalStatusService } from '../../services/global-status/global-status.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(
    public globalStatus: GlobalStatusService
  ) { }

  ngOnInit() {
  }

}
