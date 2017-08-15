import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	currentUser(){
		return (this.auth.getUser())
	}
  constructor(private auth: FirebaseService) { }

  ngOnInit() {
  }
  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }

}
