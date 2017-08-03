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
  model = {email: "", pass: ""}
  constructor(public afAuth: FirebaseService, public router: Router) { 
  		this.signup = false;
  }

  ngOnInit() {
  }

  swap(){
    console.log("TEHREWEDSFSDIHGWRKSJFDGHSKJFFLdsljkghskuh")
  	this.signup = !this.signup

  }

  logIn(){
    console.log("LOGIn ");
        var user = new User(this.model.email, this.model.pass )
        this.afAuth.signin(user)
  }
  create(){
    $(document).ready(function(){
        var user = new User(this.model.email, this.model.pass )
        this.afAuth.signup(user)
    })
  }







}
