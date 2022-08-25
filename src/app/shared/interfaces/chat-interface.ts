import {Message} from "./message";

export interface ChatInterface {
  id: number,
  name: string,
  userAva: string,
  messages: Message[]
}
