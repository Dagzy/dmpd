import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService implements CanActivate{
	authState; //variable for the state of authentication 

	constructor(private af: AngularFireAuth, private router: Router){ //class has AngularFireAuth (af's way of authenticating users) and the router (for setting the view based on the url)
		this.af.authState.subscribe((authState) => {//lemme get back to that
			this.authState = authState //sets the variable authState to the resut of this function
		})
	}
	getUserId(){ //function that returns current user's id
		return this.af.auth.currentUser.uid
	}
	getUser(){
		return this.af.auth.currentUser
	}
	
	signup(user: User){ //signup function. takes in a user object 
		this.af.auth.createUserWithEmailAndPassword(user.email,user.password) //AF's signup function takes in an email and a password (automatically saves it and stuff)
		.then(() => { //when completed 
			console.log("Successfully created user")
			this.router.navigateByUrl('/home');//navigates to homepage
		})
		.catch((e) => {
			console.log(e);//if error, print the error
			return alert(e);
		})
	}
	signin(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.password)
		.then(() => {
			this.router.navigateByUrl('/home');
		})
		.catch((e) => {
			console.log(e);
			return alert(e);
		})
	}
	signout(){
		this.af.auth.signOut()//uses angular fire signout function
		.then(() => {
			this.router.navigateByUrl('/');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	isAuthed(){
		return !!this.authState; //Determines whether or not there is a user logged in
	}

	canActivate(){
		if(!!(this.getUser())){
			return true
		} else {
			this.router.navigateByUrl('landing')
			return false
		}
		
	}
	
}