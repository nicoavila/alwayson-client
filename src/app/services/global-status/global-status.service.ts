import { Injectable } from '@angular/core';

@Injectable()
export class GlobalStatusService {
  public isLoggedIn: Boolean = false;
  public isLoading: Boolean = false;
}
