import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConnectWsComponent } from './components/connect-ws/connect-ws.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectWsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
