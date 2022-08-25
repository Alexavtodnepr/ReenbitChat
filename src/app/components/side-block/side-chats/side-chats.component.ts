import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Chats} from "../../../../assets/static/static";
import {ChatInterface} from "../../../shared/interfaces/chat-interface";
import {DataService} from "../../../shared/services/data.service";

@Component({
  selector: 'app-side-chats',
  templateUrl: './side-chats.component.html',
  styleUrls: ['./side-chats.component.scss']
})
export class SideChatsComponent implements OnInit {
  chats!: any[];
  chat = {}
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.chats = Chats;
  }

  ChooseChat(chat:any) {
    this.chat = chat;
    this.ds.transData(this.chat)
  }
}
