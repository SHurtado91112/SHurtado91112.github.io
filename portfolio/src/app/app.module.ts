import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRootComponent } from './app.root';
import { AppComponent } from './app.component';
import { ContentHolderComponent } from './content_holder/app.content_holder';
import { ContentComponent } from './content_holder/content_partials/app.content';
import { ContentSkillComponent } from './content_holder/content_partials/app.content_skill';
import { ContentMusicComponent } from './content_holder/content_partials/content_music/app.content_music';
import { ContentDetailComponent } from './content_holder/content_partials/content_detail/app.content_detail';
import {DetailService} from './app.detail_service';

// Remember to import `intersection-observer` polyfill to support all major browsers
import 'intersection-observer';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  { path: 'music', component: ContentMusicComponent },
  { path: 'detail/:id/:ind', component: ContentDetailComponent }
];

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
    ContentHolderComponent,
    ContentComponent,
    ContentSkillComponent,
    ContentMusicComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DetailService],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
