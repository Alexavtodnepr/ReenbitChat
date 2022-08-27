import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "../../../shared/interfaces/message";
import {ChuckNorrisService} from "../../../shared/services/chuck-norris.service";
import {ChatInterface} from "../../../shared/interfaces/chat-interface";

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss']
})
export class ChatFooterComponent implements OnInit, OnChanges {
  @Input()
  messageArray!: Message[];
  @Input()
  id!: number;
  storage!: ChatInterface[];
  public form!: FormGroup;
  textMessage = '';

  constructor( private jokeChuck: ChuckNorrisService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl('', Validators.required)
    });

  }

  setingStorage(){
    this.storage = JSON.parse(localStorage.getItem('chat')!);
    this.storage.forEach(el=>{
      if(el.id == this.id){
        el.messages = this.messageArray;
      }
    });
    localStorage.setItem('chat',JSON.stringify(this.storage));
  }

  submit() {
    this.textMessage = this.form.controls['text'].value;
    const newMessage = {
      date: new Date,
      text: this.textMessage,
      author: 'user',
      read: true
    }
    this.messageArray.push(newMessage);
    this.setingStorage();
    this.chuckNorris()
    this.form.reset();
  }
  chuckNorris(){
    this.jokeChuck.getJoke().subscribe(res=>{
      const newMessage = {
        date: new Date(),
      // @ts-ignore
        text: res.value,
        author: '',
        read: false
      }
      setTimeout(() =>{
        this.messageArray.push(newMessage);
        this.setingStorage();
      },10000);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    setInterval(() =>{
      this.messageArray.forEach((el:Message)=>{
        if(el.author == ''){
          el.read = true;
        }
      });
      this.setingStorage();
    },10000);
  }
}
