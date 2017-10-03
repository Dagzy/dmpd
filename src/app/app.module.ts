import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { MessageService } from './services/messageService';
import { AuthGuard } from './services/auth-guard.service';
import {FirebaseService} from './services/authService';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
// import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MessagesComponent } from './messages/messages.component';
import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { FacebookModule } from 'ngx-facebook';


  export const config = {
    apiKey: "AIzaSyBBWJJG70QSKgGlWzz5D3lXgZitVNDp-XQ",
    authDomain: "split-500b7.firebaseapp.com",
    databaseURL: "https://split-500b7.firebaseio.com",
    projectId: "split-500b7",
    storageBucket: "",
    messagingSenderId: "524073548350"
  };
//   let configure = new AuthServiceConfig ([
//     {
//       id: GoogleLoginProvider.PROVIDER_ID,
//       provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("Facebook-App-Id")
//   }
// ]);



const appRoutes: Routes = [
  {
  	 path: 'home',
   	 component: HomepageComponent,
     canActivate: [AuthGuard]
   },
   {

     path: 'landing',
     component: LandingComponent

   },
   {
     path: 'create',
     component: CreateComponent,
     canActivate: [AuthGuard]

   },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
   {
     path: 'messages',
     component: MessagesComponent,
     canActivate: [AuthGuard]
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
    MessagesComponent,
    EditComponent

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
    ),
    HttpModule,
    EmbedVideo.forRoot(),
    FacebookModule.forRoot()
    // SocialLoginModule.initialize(configure)
  ],
  providers: [MessageService, FirebaseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
