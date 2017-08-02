import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LandingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
