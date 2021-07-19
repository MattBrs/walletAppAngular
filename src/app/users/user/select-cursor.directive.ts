import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appSelectCursor]'
})
export class SelectCursorDirective implements OnInit {

  selected = false;

  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.border') border = 'white';
  @HostBinding('style.backgroundColor') background = 'white';
  @HostListener('mouseenter') hover(eventData: Event) {
    this.border = '1px solid lightgreen';
  }
  @HostListener('mouseleave') leave(eventData: Event){
    this.border = '1px solid white';
  }
  @HostListener('document:click', ['$event']) click(eventData: Event){
    console.log('click')
    if(!this.selected && this.element.nativeElement.contains(eventData.target)){
      this.selected = true;
      this.background = 'lightgreen';
    }else if(this.selected){
      this.background = 'white';
      this.selected = false;
    }
  }

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.background = 'white';
    this.cursor = 'pointer';
    this.border = '1px solid white';
  }

}
