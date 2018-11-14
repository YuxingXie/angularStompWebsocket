import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConnectWsComponent } from './components/connect-ws/connect-ws.component';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {appRxStompConfig} from 'app/config/stomp-config';

@NgModule({
  declarations: [
    AppComponent,
    ConnectWsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: appRxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
