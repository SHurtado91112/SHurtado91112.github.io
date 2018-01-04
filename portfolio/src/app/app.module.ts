import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content_holder/app.content_holder';
import { LeftComponent } from './content_holder/content_partials/app.left_content';
import { RightComponent } from './content_holder/content_partials/app.right_content';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
