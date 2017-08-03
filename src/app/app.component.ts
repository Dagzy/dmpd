import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	user: Observable<firebase.User>;

	constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
		this.user = this.afAuth.authState;

	}
	navShouldBe(){ //a function that determines whether or not the nav bar should appear. 
		var state: boolean
		var url = window.location.href
		var indexOfSlash: number
		for(var i = 0; i< url.length; i++){
			if(url[i] === '/'){
				indexOfSlash = i

			}
		}
		var urlEnd = url.substring(indexOfSlash, url.length)
		if(urlEnd === "/#login" || urlEnd === "/#signup" || urlEnd==="/landing"){
			state = false
		} else {
			state = true
		}
		return state
	}	
	title = 'app';


}
