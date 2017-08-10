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
  constructor( private msgs: MessageService, private auth: FirebaseService){ //msgs is messageService and auth is authService(stupidly called FirebaseService)
  }
  //messages
  mgs = [] //The Array for the message objects that are completed { title: "theTitle", text: "text"}
  messages //A Variable will be the object containing all of the messages 
  //firebase returns our data as a large object wherein all of the keys are Id's and their respective values are the message objects. 
  idStrings = [] //Holds the ids of all of the message objects (these are the keys in the object described above)
  hasMessages //a boolean that designatees whether or not the message object has any keys (if there are any messages belonging to this user)

  ngOnInit() {
    console.clear()
  }

  filterMessages(){ //This is the function is called in the HTML. gets the message object and converts it into an array
    var filteredMessages = []; //creates an empty array - made to hold message objects( {title : "", text: ""})
    var index = 0; //creates index variable with value of 0 
    var self = this //becaue of scope and stuff "this" becomes ambiguous the deeper you go into objects and loops and therefore I am setting self to mean the "this" refering to the current class 
    self.mgs = []
    self.idStrings = []
    if(this.messages){  //If there are messages (and this variable is not null)
      self.hasMessages = true
      Object.keys(this.messages).forEach(function(message){ //loop over the keys in the message object (remember that the key names are the object Id's for the message and their values are the acutal message data)
        filteredMessages.push({title: self.messages[message].title, text: ""})//This adds an object with title (gotten from the object) and text set to empty (because the object only has parts, rather than a completed message. We shall set that below.)
        for(var x in self.messages[message].parts){ //This loops over all of the parts in the object 
          filteredMessages[index].text += (self.messages[message].parts[x].text)//adds each new part to the existing string (the text of the message)
        }
        self.mgs.push(filteredMessages[index])
        self.idStrings.push(message)
        index += 1 //Adds one to index at the end of every loop
      })
    } else {
      self.hasMessages = false
    }
    return filteredMessages
  }



  testMessage(){ //
   var shit =  {
      title: 'breakupOne',
      parts: [
          {
            begmidend: 'beg',
            text: 'Hey, I\'ve been thinking '
          },
          {
            begmidend: 'mid',
            text: 'We should break up '
          },
          {
            begmidend: 'end',
            text: 'And that\'s all'
          }
        ]
      }
    this.msgs.makeMessage(shit, this.auth.getUser())
    var self = this //the variable self refers to "this" when "this" refers to the current class

    var theID = this.auth.getUser()//gets id of current user


    this.msgs.queryByUser(theID, function(result){ //This is a function that gets all of the messages that are associated wiht the current user
      self.messages = result //sets this class's message object equal to big object of the messages database that we just got back.
      
    })    
  }

  goTo(index){
    console.log(this.mgs[index])
  }

  delete(index){
    console.log(this.hasMessages)
    this.messages[this.idStrings[index]]
    this.msgs.delete(this.idStrings[index])
    
    console.log(this.messages)
    this.idStrings.splice(index, 1)
    console.log(this.idStrings)
    
  }

  quickSend(index){
    console.log(this.mgs[index])
    this.msgs.sendMessage(this.mgs[index])
  }
}

