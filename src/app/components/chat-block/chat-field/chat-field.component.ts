import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-field',
  templateUrl: './chat-field.component.html',
  styleUrls: ['./chat-field.component.scss']
})
export class ChatFieldComponent implements OnChanges {
  @Input() chat: any;

  constructor(private elRef: ElementRef) { }

  ngOnChanges(): void {
  }

}
