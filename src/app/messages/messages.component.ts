import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/messageService'
import { FirebaseService }  from '../services/authService';
import { Router } from '@angular/router';



declare const Twilio: any;
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //messages
  constructor( private msgs: MessageService, private auth: FirebaseService, private router: Router){} //msgs is messageService and auth is authService(stupidly called FirebaseService)

  //messages
  messageList = [] //The Array for the message objects that are completed { title: "theTitle", text: "text"}
  messages //A Variable will be the object containing all of the messages
  //firebase returns our data as a large object wherein all of the keys are Id's and their respective values are the message objects.
  hasMessages //a boolean that designatees whether or not the message object has any keys (if there are any messages belonging to this user)

  ngOnInit() {
    console.clear()
    this.getTheMessages()
  }


  getTheMessages(){ //
     var self = this
     this.msgs.queryByUser(this.auth.getUserId(), function(theData){
       self.messages = theData
       self.messageList = self.msgs.filterToArray(theData)
     })

  }

  goTo(index){
    let self = this
    console.log(this.messageList[index].id)
    this.router.navigate(['/edit', self.messageList[index].id])
  }

  delete(index){

    console.log()
    this.msgs.delete(this.messageList[index].id)
    this.getTheMessages()
  }

  weHaveMessages(){
    return !!(this.messages)
  }

  quickSend(index){
    console.log(this.messageList[index])
    this.msgs.sendMessage(this.messageList[index])
  }
}
