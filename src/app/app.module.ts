import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBlockComponent } from './components/side-block/side-block.component';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { ChatBlockComponent } from './components/chat-block/chat-block.component';
import { SideHeaderComponent } from './components/side-block/side-header/side-header.component';
import { SideChatsComponent } from './components/side-block/side-chats/side-chats.component';
import { ChatHeaderComponent } from './components/chat-block/chat-header/chat-header.component';
import { ChatFieldComponent } from './components/chat-block/chat-field/chat-field.component';
import { ChatFooterComponent } from './components/chat-block/chat-footer/chat-footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ScrollDownDirective } from './shared/directives/scroll-down.directive';
import { MenuDirective } from './shared/directives/menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideBlockComponent,
    AuthComponent,
    MainComponent,
    ChatBlockComponent,
    SideHeaderComponent,
    SideChatsComponent,
    ChatHeaderComponent,
    ChatFieldComponent,
    ChatFooterComponent,
    ScrollDownDirective,
    MenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
