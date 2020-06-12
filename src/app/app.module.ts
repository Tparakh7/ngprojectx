import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
