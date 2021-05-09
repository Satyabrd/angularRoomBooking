import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomrowComponent } from './roomrow/roomrow.component';
import { HeadbarComponent } from './headbar/headbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomrowComponent,
    HeadbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
