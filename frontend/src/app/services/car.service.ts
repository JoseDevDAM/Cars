import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endPoint = "http://localhost:8080/api/cars";

  constructor(private httpClient: HttpClient) { }

  getCars(){
    return this.httpClient.get(this.endPoint);
  }
}
