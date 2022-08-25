import {AfterViewChecked, Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appScrollDown]'
})
export class ScrollDownDirective implements OnInit{

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.scrollDown();

  }

  scrollDown(){
    this.element.nativeElement.scrollIntoView({block: "end", behavior: "smooth"})
  }

}
