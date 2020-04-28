import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
// import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, DoCheck {

  imagePerso = false;
  imageSbt = false;
  imageSodifrance = false;
  imageGlobal = true;
  // @ViewChild('tabs') tabs: MatTabsModule;
  // @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  constructor() { }

  ngOnInit() { }

  ngDoCheck() { }

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
