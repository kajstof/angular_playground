import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WiaderkoComponent } from './wiaderko/wiaderko.component';
import { GrabkiComponent } from './wiaderko/grabki/grabki.component';

@NgModule({
  declarations: [
    AppComponent,
    WiaderkoComponent,
    GrabkiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
