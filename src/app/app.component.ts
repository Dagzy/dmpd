import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;

	constructor( public db: AngularFireDatabase, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
		// this.user = this.afAuth.auth.currentUser;

	}
	navShouldBe(){ // a function that determines whether or not the nav bar should appear.
		let state: boolean;
		const url = window.location.href;
		let indexOfSlash: number;
		for (let i = 0; i < url.length; i++){
			if (url[i] === '/'){
				indexOfSlash = i;

			}
		}
		// const urlEnd = url.substring(indexOfSlash, url.length);
		// if (urlEnd === '/' || urlEnd === '/landing'){
		// 	state = false;
		// 	// make ^false if dont want the menu there
		// } else {
		// 	state = true;
		// }
		return state;
	}
	title = 'app';

// loginFacebook() {
//     this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
//     .catch(function (error){
//       alert('${error.message} Please try again')
//     })
//   }
}
