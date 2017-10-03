import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService'
import { User } from '../models/user'
import * as firebase from 'firebase/app';
import { EmbedVideoService } from 'ngx-embed-video';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [FirebaseService]
})
export class LandingComponent implements OnInit {
  signup: boolean //Determines if the user has selected the signup tab or not
  model = { email: '', pass: "", newPass: "", newEmail: "" }
  //Object made for holding values from the DOM based on ngModel
  
  constructor(public afAuth: FirebaseService, private embedService: EmbedVideoService) {
    // Creates variable for auth to handle anything regarding the User
    this.signup = false;
    // This function initializes the FB variable
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = () => {
      console.log("fbasyncinit")

      FB.init({
        appId: 127561051211040,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
      });
      FB.AppEvents.logPageView();
      // This is where we do most of our code dealing with the FB variable like adding an observer
      // to check when the user signs in

      // ** ADD CODE TO NEXT STEP HERE **
    };
  }
  // video
    youtubeUrl = "https://www.youtube.com/watch?v=L9oMb3_UW-o";
    youtubeId = "L9oMb3_UW-o";
    pieces= []
   
  // video(){
  //   return !!(this.youtubeUrl)
  // }
   // this helps make the hamburger menu dropdown
   isIn = false;   // store state
   toggleState() { // click handler
       let bool = this.isIn;
       this.isIn = bool === false ? true : false; 
   }
 
   // hamburger close and open
   openNav() {
     document.getElementById("mySidenav").style.width = "250px";
   }
   closeNav() {
     document.getElementById("mySidenav").style.width = "0";
   }
   

  ngOnInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

  // fbonly(){
  //   this.window.FB = !this.window.FB
  // }
  swap() {
    this.signup = !this.signup // swaps views from signup to login based on the signup boolean

  }

  logIn() {
    var user = new User(this.model.email, this.model.pass) // creates anew user obkject
    this.afAuth.signin(user)// runs the signin function in authService.ts
  }
  create() {

    var user = new User(this.model.newEmail, this.model.newPass)// creates a new user obkject
    this.afAuth.signup(user)// runs the signup function in authService.ts
  }
}
