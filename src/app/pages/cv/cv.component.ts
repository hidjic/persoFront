import { Component, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  opacity = 1;

  constructor() { }

  changeOpacity(e: number) {
    // console.log('test...');
    // console.log(e);
    this.opacity = e;
  }
  // // {'opacity': expression}
  // updateopacity() {
  //   // console.log(this.opacity);
  //   return this.opacity;
  // }
}
