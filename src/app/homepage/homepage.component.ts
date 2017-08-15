import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService';
import {MessageService} from '../services/messageService';


@Component({
  selector: 'app-homepage',git
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   pieces= []
  constructor(private messageService : MessageService, private auth : FirebaseService) {

  }

  ngOnInit() {
    this.populate()
  }

  populate() {
    console.log("GEWFIJSDLK")
    var self = this
    this.messageService.queryByUser(this.auth.getUser(), function(theData){
       self.pieces = self.messageService.filterToArray(theData)
    })
  }

// Twilio Credentials


}
