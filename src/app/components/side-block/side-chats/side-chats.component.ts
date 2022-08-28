import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";

@Component({
  selector: 'app-side-chats',
  templateUrl: './side-chats.component.html',
  styleUrls: ['./side-chats.component.scss']
})
export class SideChatsComponent implements OnInit {
  chats!: any[];
  chat = {};
  search: string = '';
  openModal: boolean = false;
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.allChatsStream$.subscribe((el)=>{
      this.chats = el;
    })
  }
  ChooseChat(chat:any) {
    this.chat = chat;
    this.ds.transData(this.chat)
  }
}
