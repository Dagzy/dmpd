import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as jquery from "jquery"
import { Router} from '@angular/router'
import { FirebaseService } from '../services/authService'
import * as firebase from 'firebase/app';
import { User } from '../models/user'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [FirebaseService]
})
export class LandingComponent implements OnInit {
	signup: boolean
  model = {email: "", pass: "", newPass: "", newEmail: ""}
  constructor(public afAuth: FirebaseService, public router: Router) { 
  		this.signup = false;
  }

  ngOnInit() {
  }

  swap(){
  	this.signup = !this.signup

  }

  logIn(){
        var user = new User(this.model.email, this.model.pass )
        this.afAuth.signin(user)
  }
  create(){
    
        var user = new User(this.model.newEmail, this.model.newPass )
        this.afAuth.signup(user)
  }







}
