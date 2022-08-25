import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "../../../shared/interfaces/message";
import {ChuckNorrisService} from "../../../shared/services/chuck-norris.service";

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss']
})
export class ChatFooterComponent implements OnInit, OnChanges {
  @Input()
  messageArray!: Message[];
  public form!: FormGroup;
  textMessage = '';
  joke:any = {};

  constructor( private jokeChuck: ChuckNorrisService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl('', Validators.required)
    });
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
      },10000);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    setInterval(() =>{
      this.messageArray.forEach((el:Message)=>{
        if(el.author == ''){
          el.read = true;
        }
      })
    },10000);
  }
}
