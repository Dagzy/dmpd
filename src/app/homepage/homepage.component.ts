import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService';
import { MessageService } from '../services/messageService';
import { MessagesComponent } from '../messages/messages.component';
// import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // //video
  // youtubeUrl = "https://www.youtube.com/watch?v=L9oMb3_UW-o";
  // youtubeId = "L9oMb3_UW-o";
  pieces= []
  constructor(private messageService : MessageService, private auth : FirebaseService) {
    //   private embedService: EmbedVideoService   <-- was after the firebsseservice
    // console.log(this.embedService.embed(this.youtubeUrl));
    // console.log(this.embedService.embed_youtube(this.youtubeId));
  }

  ngOnInit() {
//    this.populate()
  }

  populate() {
    //console.log("GEWFIJSDLK")
    var self = this
    this.messageService.queryByUser(this.auth.getUser(), function (theData) {
      self.pieces = self.messageService.filterToArray(theData)
    })
  }




// Twilio Credentials


}
