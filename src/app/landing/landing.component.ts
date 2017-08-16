import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService'
import { User } from '../models/user'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [FirebaseService]
})
export class LandingComponent implements OnInit {
	signup: boolean //Determines if the user has selected the signup tab or not 
  model = {email: "", pass: "", newPass: "", newEmail: ""} //Object made for holding values from the DOM based on ngModel
  constructor(public afAuth: FirebaseService) {  //Creates variable for auth to handle anything regarding the User
  		this.signup = false; 
  }

  ngOnInit() {
  }

  swap(){
  	this.signup = !this.signup //swaps views from signup to login based on the signup boolean 

  }

  logIn(){
        var user = new User(this.model.email, this.model.pass ) //creates anew user obkject
        this.afAuth.signin(user)//runs the signin function in authService.ts
  }
  create(){
    
        var user = new User(this.model.newEmail, this.model.newPass )//creates a new user obkject
        this.afAuth.signup(user)//runs the signup function in authService.ts
  }







}
