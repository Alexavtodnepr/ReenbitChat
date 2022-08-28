import { Injectable } from '@angular/core';
import {ChatInterface} from "../interfaces/chat-interface";
import {BehaviorSubject, Subject} from "rxjs";
import {Message} from "../interfaces/message";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ChatsNew: ChatInterface[] = [];
  private chats: ChatInterface[] | any = JSON.parse(localStorage.getItem('chat')!);
  private choosedChatData = new Subject<ChatInterface>();
  private allChats = new BehaviorSubject(this.chats);
  choosedChatStream$ = this.choosedChatData.asObservable();
  allChatsStream$ = this.allChats.asObservable();
  constructor() { }

  transData(chat: any){
    this.choosedChatData.next(chat);
  }

  updateChats(id:number, messageAnswer: Message){
    this.ChatsNew = this.allChats.value.forEach((el:ChatInterface)=>{
      if(id == el.id){
        el.messages.push(messageAnswer);
      }
    });
  }

}
