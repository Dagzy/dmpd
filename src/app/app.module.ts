import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { HttpClientModule }  from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';

import { CreateComponent } from './create/create.component'
import { MessageService } from './services/messageService'
import {FirebaseService} from './services/authService'
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MessagesComponent } from './messages/messages.component';


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
   	 component: HomepageComponent,
     canActivate: [FirebaseService]
   },
   {

     path: 'landing',
     component: LandingComponent

   },
   {
     path: 'create',
     component: CreateComponent,
     canActivate: [FirebaseService]

   },
   {
     path: 'messages',
     component: MessagesComponent,
     canActivate: [FirebaseService]
   },
   {
     path: '',
     redirectTo: 'landing',
     pathMatch: 'full'
   },
   ]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingComponent,
    CreateComponent,
    NavComponent,
    MessagesComponent

  ],
  imports: [
    AngularFireModule.initializeApp(config),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
    	appRoutes,
    	{enableTracing: true} //debugging
    )
  ],
  providers: [MessageService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
