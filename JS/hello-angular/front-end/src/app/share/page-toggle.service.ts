import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageToggleService {
  public routingCount = 0;

  constructor(
    private router: Router

  ) { }
  plusCount(){
    this.routingCount++;
  }

  goPage(target){
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
