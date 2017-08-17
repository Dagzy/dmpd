import { Message } from '../models/message'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessageService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
  }
  makeMessage(theMessage, userId) { //function that takes in a message object and a user Id
    theMessage.ownerId = userId //adds the Id to the message object
    this.db.database.ref('/messages').push(theMessage) //adds it to the database
  }

  queryByUser(userId, callback) {
    this.db.database.ref('/messages').orderByChild('ownerId').equalTo(userId).on("value", function (snapshot) { //go to /messages in the database

      callback(snapshot.val())//runs callback function with this data.
    })

  }

  delete(messageData) {
    this.db.database.ref('/messages/' + messageData).remove((err: Error) => {
      if (err) {
        console.log(err)
      }
    })

  }

  filterToArray(messageObject) { //Turns the object into an array
    var arrayFor = []
    Object.keys(messageObject).forEach(function (message) { //loop over the keys in the message object (remember that the key names are the object Id's for the message and their values are the acutal message data)
      arrayFor.push({
        title: messageObject[message].title,
        text: messageObject[message].text,
        part: messageObject[message].text,
        id: message,
        phoneNum: messageObject[message].phoneNum
      })//This adds an object with title (gotten from the object)
    })

    return arrayFor
  }

  // filterAMessage(messageObject){
  // 	var filteredMessage = {title: "", text: "" }
  // 	for(var x in messageObject.parts){
  //            filteredMessage.text += (messageObject.parts[x].text)
  //        }
  //        return filteredMessage
  // }

  sendMessage(message) {
    const messageToSend = {
      message: {
        toNumber: message.phoneNum,
        text: message.text
      }
    };
    this.http.post('https://dmpdsms.herokuapp.com/sms', messageToSend).subscribe(resp => { console.log(resp); });
  }

  getMsgbyId(id) {
    return this.db.database.ref('/messages/' + id).once('value').then((s) => {
      return s.val();
    });

  }
  update(messageData, newtitle, newtext) {
    this.db.database.ref('/messages/' + messageData).update({
      title: newtitle,
      text: newtext
    })
  }


}
