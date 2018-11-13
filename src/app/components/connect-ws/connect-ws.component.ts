import { Component, OnInit } from '@angular/core';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from "@stomp/ng2-stompjs";

const myRxStompConfig: InjectableRxStompConfig = {
  // Which server?
  brokerURL: 'ws://127.0.0.1:8080/gs-guide-websocket',

  // Headers
  // Typical keys: login, passcode, host
  connectHeaders: {
    login: 'guest',
    passcode: 'guest'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnectDelay: 15000,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (str) => {
    console.log(str);
  }
};
@Component({
  selector: 'app-connect-ws',
  templateUrl: './connect-ws.component.html',
  styleUrls: ['./connect-ws.component.css'],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
})
export class ConnectWsComponent implements OnInit {

  constructor(private rxStompService: RxStompService) { }
  connected: boolean;
  ngOnInit() {
    this.rxStompService.configure(myRxStompConfig);
    this.rxStompService.activate();
    this.rxStompService.stompClient.activate();
    this.rxStompService.stompClient.publish({destination: "/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});

  }

}
