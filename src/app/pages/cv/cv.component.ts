import { Component, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  imagePerso = false;
  imageSbt = false;
  imageSodifrance = false;
  imageGlobal = true;

  constructor() { }

  gestionImagesCompetences(nameVar: string) {
    this.imagePerso = false;
    this.imageSbt = false;
    this.imageSodifrance = false;
    this.imageGlobal = false;
    switch (nameVar) {
      case 'imagePerso': this.imagePerso = true;
                         break;
      case 'imageSbt': this.imageSbt = true;
                       break;
      case 'imageSodifrance': this.imageSodifrance = true;
                              break;
      case 'imageGlobal': this.imageGlobal = true;
                          break;
    }
  }
}
