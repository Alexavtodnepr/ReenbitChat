import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {ChatInterface} from "../../shared/interfaces/chat-interface";

@Component({
  selector: 'app-chat-block',
  templateUrl: './chat-block.component.html',
  styleUrls: ['./chat-block.component.scss']
})
export class ChatBlockComponent implements OnInit {
  chat!: ChatInterface;
  bool = false;
  message: any = {};
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.choosedChatStream$.subscribe((chat:ChatInterface)=>{
      this.chat = chat;
    })
  }
}
