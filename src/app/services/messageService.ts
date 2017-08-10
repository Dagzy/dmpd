import { Message } from '../models/message'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessageService{

	constructor(private db: AngularFireDatabase, private http: HttpClient){
	}
	makeMessage(theMessage, userId){ //function that takes in a message object and a user Id
		theMessage.ownerId = userId //adds the Id to the message object
		this.db.database.ref('/messages').push(theMessage) //adds it to the database
	}

	queryByUser(userId, callback){	
		this.db.database.ref('/messages').orderByChild('ownerId').equalTo(userId).on("value", function(snapshot){ //go to /messages in the database 
			
			callback(snapshot.val())//runs callback function with this data.
		})

	}

	delete(messageData){
		this.db.database.ref('/messages/' + messageData).remove((a: Error)=>{
			if(a){
				console.log(a)
			}
		})

	}

	filterAMessage(messageObject){
		var filteredMessage = {title: "", text: ""}
		for(var x in messageObject.parts){
            filteredMessage.text += (messageObject.parts[x].text)
        }
        return filteredMessage
	}

	sendMessage(message){
		this.http.post('https://powerful-plateau-23250.herokuapp.com/sms', message).subscribe(resp => {console.log(resp)})
	}


}