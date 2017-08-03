import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	signup: boolean
  constructor(public afAuth: AngularFireAuth) { 
  		this.signup = false;
  }

  ngOnInit() {
  }

  swap(){
  	this.signup = !this.signup

  }

  login() {
    console.log("Login")
      this.afAuth.auth.signInAnonymously();
      console.log(this.afAuth.authState)
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  signin() {
    this.afAuth.auth.createUserWithEmailAndPassword("a", "a");
  }



}
