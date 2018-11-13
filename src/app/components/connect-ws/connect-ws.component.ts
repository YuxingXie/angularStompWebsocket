import { Component, OnInit } from '@angular/core';
import { RxStompService} from "@stomp/ng2-stompjs";
import { Message } from '@stomp/stompjs';
import {RxStompState} from '@stomp/rx-stomp';
@Component({
  selector: 'app-connect-ws',
  templateUrl: './connect-ws.component.html',
  styleUrls: ['./connect-ws.component.css']
})
export class ConnectWsComponent implements OnInit {

  constructor(private rxStompService: RxStompService) { }
  state: string;
  receivedMessages: string[]= [];
  ngOnInit() {
    this.rxStompService.connected$.subscribe((rxStompState :RxStompState)=> {
        this.state = rxStompState == 0?'closed':(rxStompState == 1?'connecting':(rxStompState == 2?'open':'closing'));
    })
    // this.rxStompService.publish({destination: "/app/hello", body: '{"name": "abcd"}', skipContentLengthHeader: true});
    this.rxStompService.watch('/app/hello').subscribe((message: Message) => {
      console.log('web socket get message:',message.body);
      this.receivedMessages.push(message.body);
    });
  }
  onSendMessage() {
    const message = `Message generated at ${new Date}`;
    this.rxStompService.publish({destination: '/app/hello', body: `{"name":"${Math.random()}"}`});
  }
}
