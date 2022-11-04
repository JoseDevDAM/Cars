import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  marca: string = "BH";
  modelo: string = "Sky";
  
  constructor(private router: Router) {}

  goToMyCars(){
    this.router.navigateByUrl("/my-cars");
  }

  

}
