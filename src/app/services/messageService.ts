import { Message } from '../models/message'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessageService{
	constructor(private db: AngularFireDatabase, private http: HttpClient){
	}
	
	makeMessage(constructedMessage, userId){
		constructedMessage.ownerId = userId
		this.db.database.ref('/messages').push(constructedMessage)
	}

	queryByUser(userId, callback){
		var queryResult = []	
		var self = this
		this.db.database.ref('/messages').orderByChild('ownerId').equalTo(userId).on("value", function(snapshot){
			console.log(snapshot.val())
			callback(snapshot.val())
		})
		// this.db.database.ref('/messages').once("value").then(function(snapshot){
		// 	queryResult = self.siftForId(snapshot.val(), userId)
		// 	callback(queryResult)
		// })
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