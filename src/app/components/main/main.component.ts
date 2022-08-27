import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Chats} from "../../../assets/static/static";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chat = Chats;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('chat')==null){
      localStorage.setItem('chat', JSON.stringify(this.chat));
    }
  }
}
