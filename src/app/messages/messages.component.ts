import { Component, OnInit } from '@angular/core';
import MessageService from '../services/messageService'
import { FirebaseService }  from '../services/authService';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private msgs: MessageService, private auth: FirebaseService) { }

  ngOnInit() {
  }
   messages= [ {
      title: 'breakupOne',
      parts: [
          {
            begmidend: 'beg',
            text: 'Hey, I\'ve been thinking '
          },
          {
            begmidend: 'mid',
            text: 'we should break up '
          },
          {
            begmidend: 'end',
            text: 'and that\'s all.'
          }
        ]
      },
      {
      title: 'breakupTwo',
      parts: [
          {
            begmidend: 'beg',
            text: 'The time has come '
          },
          {
            begmidend: 'mid',
            text: 'for us to break it off '
          },
          {
            begmidend: 'end',
            text: 'so goodbye.'
          }
        ]
      },
     {
      title: 'breakupThree',
      parts: [
          {
            begmidend: 'beg',
            text: 'Hey, I\'ve been thinking '
          },
          {
            begmidend: 'mid',
            text: 'we should end this '
          },
          {
            begmidend: 'end',
            text: 'and never speak again '
          }
        ]
      },
       {
      title: 'breakupFour',
      parts: [
          {
            begmidend: 'beg',
            text: 'The time has come '
          },
          {
            begmidend: 'mid',
            text: 'for us to break it off '
          },
          {
            begmidend: 'end',
            text: 'so goodbye.'
          }
        ]
      },
       {
      title: 'breakupFive',
      parts: [
          {
            begmidend: 'beg',
            text: 'The time has come '
          },
          {
            begmidend: 'mid',
            text: 'for us to break it off '
          },
          {
            begmidend: 'end',
            text: 'so goodbye.'
          }
        ]
      }
    ];

    filterMessages(){
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
    	this.auth.getUser().getIdToken().then(a => {
    		console.log(a)
    		this.msgs.makeMessage(this.messages[1], a)
    	})
    	
    }
}
