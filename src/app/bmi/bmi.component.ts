import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent{

  constructor() { }

  navigate() {
/*
      this.router.navigate(["home"]),
      this.router.navigate(["temp"]);        */
    }

    stone;
    pounds;
    orKgs;
    /*feet : number = 0;
    inches : number = 0;
    orMeters : number =0;*/

StoneToKgs(event: KeyboardEvent) {
    this.stone = (<HTMLImputElement>event.target).value;
    this.orKgs = (this.stone * 6.35029318)
  }
PoundToKgs(event: KeyboardEvent){
  this.pounds = (<HTMLImputElement>event.target).value;
  this.orKgs= Math.round(this.pounds * 0.45359237)
}
orKgsToStoneAndPound() {
  this.orKgs = (<HTMLImputElement>event.target).value;
  this.stone = Math.round(this.orKgs *  2.2046226218/14)
  this.pounds = Math.round(this.orKgs * 0.45359237/2.2046226218)
   }

/*
FeetToMetres() {
    this.feet = this.orMeters * .3048;
  }
feetAndInchesToMeters() {
    this.orMeters = this.feet * .3048 + this.inches * .0254
  }
inchesToMeters() {
  this.inches = this.orMeters * .0254
}
*/
}
