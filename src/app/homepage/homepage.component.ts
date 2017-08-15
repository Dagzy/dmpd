import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService';
import {MessageService} from '../services/messageService';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   pieces = []
  constructor(private messageService : MessageService, private auth : FirebaseService) {
      this.populate()
  }

  ngOnInit() {
    this.populate()
  }

  populate() {
    var self = this
    var uid = this.auth.getUserId()
    this.messageService.queryByUser(uid, function(theData){
       self.pieces = self.messageService.filterToArray(theData)
    })
  }



}
