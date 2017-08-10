import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService';
import {MessageService} from '../services/messageService';


@Component({
  selector: 'app-homepage',
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
        text: 'Hey, I\'ve been thinking... we should end this, and never speak again'
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
        text: 'Hey, I\'ve been thinking... we should end this, and never speak again'
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
        text: 'Hey, I\'ve been thinking... we should end this, and never speak again'
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
        text: 'Hey, I\'ve been thinking... we should end this, and never speak again'
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
        text: 'Hey, I\'ve been thinking... we should end this, and never speak again'
      }

    ];
  constructor(private messageService : MessageService, private auth : FirebaseService) {

  }

  ngOnInit() {

  }

  populate() {
    this.messageService.queryByUser(this.auth.getUser(), function(theData){
       this.pieces = this.messageService.filterToArray(theData)
    })
  }



}
