import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit{

  constructor(private router: Router) { }

  navigate() {
        this.router.navigate(["home"]),
        this.router.navigate(["bmi"]);
    }


  Celcius : number = 0;
  Fahrenheit : number = 0;


  CelciusToFahrenheit() {
    this.Fahrenheit = this.Celcius * 9/5 + 32;
  }

  fahrenheitToCelcius() {
    this.Celcius= this.Fahrenheit - 32 * 5/9
  }

  ngOnInit() {
  }
}