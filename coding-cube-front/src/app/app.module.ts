import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingWordComponent } from './components/coding-word/coding-word.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CodingCubeService } from "./services/coding-cube.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CodingWordComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CodingCubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
