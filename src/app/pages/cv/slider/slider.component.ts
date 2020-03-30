import { Component, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  autoTicks = false;
  invert = true;
  max = 300;
  min = 0;
  showTicks = true;
  step = 1;
  value = 300;
  vertical = false;

  @Output() valOpacity: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  // sliderChange(e: MatSliderChange) {
  //   console.log(e);
  //   this.valOpacity.emit((1 - (e.value / 100)).toFixed(2));
  // }

}
