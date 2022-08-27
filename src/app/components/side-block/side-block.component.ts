import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../shared/services/data.service";

@Component({
  selector: 'app-side-block',
  templateUrl: './side-block.component.html',
  styleUrls: ['./side-block.component.scss']
})
export class SideBlockComponent implements OnInit {
  @Output() choseChat = new EventEmitter<any>();
  chat: any = {}
  constructor(private ds : DataService) { }

  ngOnInit(): void {

  }

  chooseChat(chat: any) {
    this.ds = chat;
  }
}
