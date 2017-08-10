import { Injectable } from '@angular/core';
import {User} from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService{
	authState; //variable for the state of authentication 

	constructor(private af: AngularFireAuth, private router: Router){ //class has AngularFireAuth (af's way of authenticating users) and the router (for setting the view based on the url)
		this.af.authState.subscribe((authState) => {//lemme get back to that
			this.authState = authState //sets the variable authState to the resut of this function
		})
	}
	getUser(){ //function that returns current user's id
		return this.af.auth.currentUser.uid
	}
	signup(user: User){ //signup function. takes in a user object 
		this.af.auth.createUserWithEmailAndPassword(user.email,user.password) //AF's signup function takes in an email and a password (automatically saves it and stuff)
		.then(() => { //when completed 
			console.log("Successfully created user")
			this.router.navigateByUrl('/home');//navigates to homepage
		})
		.catch((e) => {
			console.log(e);//if error, print the error
		})
	}
	signin(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.password)
		.then(() => {
			this.router.navigateByUrl('/home');
		})
		.catch((e) => {
			console.log(e);
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
	
}