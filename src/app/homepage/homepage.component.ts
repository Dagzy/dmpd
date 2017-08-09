import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService';
import {MessageService} from '../services/messageService';


@Component({
  selector: 'app-homepage',git
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   pieces= [ {
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
        ],
        url: '/create'
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
        ],
        url: '/create'
      },

     {
      title: 'breakupThree',
      parts: [
          {
            begmidend: 'beg',
            text: 'Hey, I\'ve been thinking'
          },
          {
            begmidend: 'mid',
            text: ' We should end this'
          },
          {
            begmidend: 'end',
            text: ' And never speak again'
          }
        ],
        url: '/create'
      },
           {
      title: 'breakupFour',
      parts: [
          {
            begmidend: 'beg',
            text: 'Hey, I\'ve been thinking'
          },
          {
            begmidend: 'mid',
            text: ' We should end this'
          },
          {
            begmidend: 'end',
            text: ' And never speak again'
          }
        ],
        url: '/create'
      },
           {
      title: 'breakupFive',
      parts: [
          {
            begmidend: 'beg',
            text: 'Hey, I\'ve been thinking'
          },
          {
            begmidend: 'mid',
            text: ' We should end this'
          },
          {
            begmidend: 'end',
            text: ' And never speak again'
          }
        ],
        url: '/create'
      }

    ];
  constructor() {

  }
  ngOnInit() {
  }
  filterMessages(){
        let filteredMessages = []
        for (let i in this.pieces){
            filteredMessages.push ({title: this.pieces[i].title, text: ''});
            for (const x in this.pieces[i].parts){
                console.log(filteredMessages[i].text);
                filteredMessages[i].text += (this.pieces[i].parts[x].text);
            }
        }
        return filteredMessages;
    }


// Twilio Credentials


}
