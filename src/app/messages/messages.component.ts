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
  mgs = [] //The Array for the message objects
  messages
  idStrings = []

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
        console.clear()
    }

    filterMessages(){
      var filteredMessages = [];
      var index = 0;
      var self = this
      if(this.messages){
        Object.keys(this.messages).forEach(function(message){
          filteredMessages.push({title: self.messages[message].title, text: ""})
          for(var x in self.messages[message].parts){
            filteredMessages[index].text += (self.messages[message].parts[x].text)
          }
          index = index+1
        })
      } 
      return filteredMessages
    }

    testMessage(){
      
      var self = this

      var theID = this.auth.getUser()

      
      this.msgs.queryByUser(theID, function(result){
        self.messages = result
        self.mgs = []
        self.idStrings = []
        Object.keys(self.messages).forEach(function(m){
          self.mgs.push(result[m])
          self.idStrings.push(m)
        })
        console.log(self.idStrings)


      })    
    }

    goTo(index){
      console.log(this.mgs[index])
    }

    delete(index){
      delete this.messages[this.idStrings[index]]
      console.log(this.messages)
      this.idStrings.splice(index, 1)
      console.log(this.idStrings)
      this.msgs.delete(this.idStrings[index])
    }

    quickSend(index){

    }
  }

