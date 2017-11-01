import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService'
import { EmbedVideoService } from 'ngx-embed-video';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	currentUser(){
		return (this.auth.getUser())
  }
   // video
   youtubeUrl = "https://www.youtube.com/watch?v=L9oMb3_UW-o";
   youtubeId = "L9oMb3_UW-o";
 // video(){
 //   return !!(this.youtubeUrl)
 // }
  constructor(private auth: FirebaseService, private router: Router) { }

  ngOnInit() {
  }
}
