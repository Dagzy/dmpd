import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

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
    ];

    filterMessages(){
    	var filteredMessages = []
    	for(var i in this.messages){
    		filteredMessages.push ({title: this.messages[i].title, text: ""})
    		for(var x in this.messages[i].parts){
    			console.log(filteredMessages[i].text)
    			filteredMessages[i].text += (this.messages[i].parts[x].text)
    		}
    	}
    	return filteredMessages
    }

}
