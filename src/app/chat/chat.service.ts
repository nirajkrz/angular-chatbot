import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Message {
  constructor(public content: string, public sentBy: string){}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularChatBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  conversation = new BehaviorSubject<Message[]>([]); // set empty default val

  constructor() { }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  // send and receive messages from dialogflow

  converse(msg: string) {
    const userMsg = new Message(msg, 'user');
    this.update(userMsg);
    return this.client.textRequest(msg)
    .then(res => {
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech, 'bot');
      this.update(botMessage);
    })
  }

  talk(){
    this.client.textRequest('Who are you?')
    .then( res => console.log(res));
  }
}
