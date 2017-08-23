import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/authService';
import { MessageService } from '../services/messageService';
import { MessagesComponent } from '../messages/messages.component';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier
  pieces = []
  constructor(private messageService: MessageService, private auth: FirebaseService) {

  }

  ngOnInit() {
    this.populate()
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  populate() {
    console.log("GEWFIJSDLK")
    var self = this
    this.messageService.queryByUser(this.auth.getUser(), function (theData) {
      self.pieces = self.messageService.filterToArray(theData)
    })
  }

  // Twilio Credentials
  signIn(phoneNumber: number) {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        // let prompt = this.alertCtrl.create({
        //   title: 'Enter the Confirmation code',
        //   inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
        //   buttons: [
        //     {
        //       text: 'Cancel',
        //       handler: data => { console.log('Cancel clicked'); }
        //     },
        //     {
        //       text: 'Send',
        //       handler: data => {
        //         confirmationResult.confirm(data.confirmationCode)
        //           .then(function (result) {
        //             // User signed in successfully.
        //             console.log(result.user);
        //             // ...
        //           }).catch(function (error) {
        //             // User couldn't sign in (bad verification code?)
        //             // ...
        //           });
        //       }
        //     }
        //   ]
        // });
        // prompt.present();
      })
      .catch(function (error) {
        console.error("SMS not sent", error);
      });

  }


}
