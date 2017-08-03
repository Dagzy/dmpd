import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

  var config = {
    apiKey: "AIzaSyBBWJJG70QSKgGlWzz5D3lXgZitVNDp-XQ",
    authDomain: "split-500b7.firebaseapp.com",
    databaseURL: "https://split-500b7.firebaseio.com",
    projectId: "split-500b7",
    storageBucket: "",
    messagingSenderId: "524073548350"
  };



const appRoutes: Routes = [
  {
  	 path: 'home',
   	 component: HomepageComponent
   },
   {
     path: 'create',
      component: CreateComponent
   }
   ]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingComponent,
    NavComponent,
   
  ],
  imports: [
     AngularFireModule.initializeApp(config),
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
    	appRoutes,
    	{enableTracing: true} //debugging
    )
  ],
  providers: [LandingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
