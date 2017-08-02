import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {
  	 path: 'home',
   	 component: LandingComponent
   }]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule
    RouterModules.forRoot(
    	appRoutes,
    	{enableTracing: true} //debugging
    	)
  ],
  providers: [LandingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
