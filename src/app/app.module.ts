import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LandingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
