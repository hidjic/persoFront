import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSodifrance]'
})
export class SodifranceDirective {

  opacity = 0;
  inc = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    const elements = document.querySelectorAll('.all');
    elements.forEach(element => {
      this.renderer.setStyle(element, 'opacity', 1);
    });
    const label = btn.textContent;
    let selector: string;
    switch (label) {
      case 'Perso': selector = '.perso';
                    break;
      case 'SBT': selector = '.sbt';
                  break;
      case 'Sodifrance': selector = '.sodi';
                         break;
    }
    const els = document.querySelectorAll(selector);
    els.forEach(el => {
      this.renderer.setStyle(el, 'opacity', 0);
    });
  }

}
