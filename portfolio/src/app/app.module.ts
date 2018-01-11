import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentHolderComponent } from './content_holder/app.content_holder';
import { ContentComponent } from './content_holder/content_partials/app.content';

@NgModule({
  declarations: [
    AppComponent,
    ContentHolderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
