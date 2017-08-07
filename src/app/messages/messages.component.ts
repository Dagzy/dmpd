import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/messageService'
import { FirebaseService }  from '../services/authService';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //messages 
  constructor( private msgs: MessageService, private auth: FirebaseService){

  }
  //messages
  mgs
  messages
  queryMessagesByUser(){
    var theList
    console.log(this.auth.getUser())
    // this.auth.getUser().getIdToken().then(a => {
      //     console.log(a)
      //     theList = this.msgs.queryByUser(a)
      //     return theList
      //   })

    }
    ngOnInit() {
      console.log("On INIT")

    }

    filterMessages(){
      console.log("Filtering")
      var filteredMessages = []
      for(var i in this.messages){
        filteredMessages.push ({title: this.messages[i].title, text: ""})
        for(var x in this.messages[i].parts){
          filteredMessages[i].text += (this.messages[i].parts[x].text)
        }
      }
      return filteredMessages
    }

    testMessage(){
      var self = this
      if(this.auth.getUser()){
        this.auth.getUser().getIdToken().then(a => {
          this.msgs.queryByUser(a, function(result){
            self.messages = result
            console.log("Anaconda")
          })
        }) 	
      } else{
        console.log("THERE IS NO USER FOR SOME FUCKING REASSON")
      }
    }
  }

