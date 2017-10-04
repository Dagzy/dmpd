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
  // // this helps make the hamburger menu dropdown
  // isIn = false;   // store state
  // toggleState() { // click handler
  //     let bool = this.isIn;
  //     this.isIn = bool === false ? true : false; 
  // }

  // // hamburger close and open
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }

  // video
  youtubeUrl = "https://www.youtube.com/watch?v=L9oMb3_UW-o";
  youtubeId = "L9oMb3_UW-o";
  pieces= []
 
// video(){
//   return !!(this.youtubeUrl)
// }
}
