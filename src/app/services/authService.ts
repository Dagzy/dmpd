import { Injectable } from '@angular/core';
import {User} from '../models/user';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService{
	authState;
	getUser(){
		return this.af.auth.currentUser
	}
	signup(user: User){
		this.af.auth.createUserWithEmailAndPassword(user.email,user.password)
		.then(() => {
			console.log("Successfully created user")
			this.router.navigateByUrl('/home');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	signin(user: User){
		this.af.auth.signInWithEmailAndPassword(user.email, user.password)
		.then(() => {
			console.log(this.af.auth.currentUser)
			this.router.navigateByUrl('/home');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	signout(){
		this.af.auth.signOut()
		.then(() => {
			this.router.navigateByUrl('/');
		})
		.catch((e) => {
			console.log(e);
		})
	}
	isAuthed(){
		return !!this.authState;
	}
	constructor(private af: AngularFireAuth, private router: Router){
		this.af.authState.subscribe((authState) => {
			this.authState = authState
		})
	}
}