import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {
  	 path: 'home',
   	 component: HomepageComponent
   }]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    	appRoutes,
    	{enableTracing: true} //debugging
    )
  ],
  providers: [LandingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
