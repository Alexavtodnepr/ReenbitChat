import { Injectable } from '@angular/core';
import {ChatInterface} from "../interfaces/chat-interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private choosedChatData = new Subject<ChatInterface>();

  choosedChatStream$ = this.choosedChatData.asObservable();
  constructor() { }

  transData(chat: any){
    this.choosedChatData.next(chat);
  }
}
