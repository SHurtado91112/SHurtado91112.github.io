import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { AppRootComponent } from './app.root';
import { AppComponent } from './app.component';
import { ContentHolderComponent } from './content_holder/app.content_holder';
import { ContentComponent } from './content_holder/content_partials/app.content';
import { ContentSkillComponent } from './content_holder/content_partials/app.content_skill';
import { ContentMusicComponent } from './content_holder/content_partials/content_music/app.content_music';

// Remember to import `intersection-observer` polyfill to support all major browsers
import 'intersection-observer';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  { path: 'music', component: ContentMusicComponent }
];

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
    ContentHolderComponent,
    ContentComponent,
    ContentSkillComponent,
    ContentMusicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes//,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
