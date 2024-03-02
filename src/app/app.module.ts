import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeHomeComponent } from './youtube-home/youtube-home.component';
import { YoutubeHomeService } from './service/youtube-home.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    YoutubeHomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
