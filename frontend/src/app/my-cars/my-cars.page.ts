import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.page.html',
  styleUrls: ['./my-cars.page.scss'],
})
export class MyCarsPage implements OnInit {

  cars: any = [];

  

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response;
    });

  }

  

}
