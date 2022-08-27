import {AfterViewChecked, Directive, ElementRef, OnChanges, OnInit} from '@angular/core';

@Directive({
  selector: '[appMenu]',
  host: {
  '(click)': 'onclick()'
  }

})
export class MenuDirective implements OnInit{
  private toggle: boolean =  false;
  widthWindow = 0;
  constructor(private el: ElementRef) {
  }

  ngOnInit(){
    this.widthWindow = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetWidth;

  }

  onclick() {
    this.toggle = !this.toggle;
    if(this.toggle && this.widthWindow<=1326){
      this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.width = '320px';
    }else{
      this.el.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.width = '50px';
    }
  }
}
