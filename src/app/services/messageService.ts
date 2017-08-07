import { Message } from '../models/message'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MessageService{
	constructor(private db: AngularFireDatabase){
		
	}
	makeMessage(theMessage, userId){
		theMessage.ownerId = userId
		this.db.database.ref('/messages').push(theMessage)
	}

	queryByUser(userId, callback){
		var queryResult = []	
		var self = this
		this.db.database.ref('/messages').once("value").then(function(snapshot){
			queryResult = self.siftForId(snapshot.val(), userId)
			callback(queryResult)
		})
	}

	siftForId(data : [Object], id){
		var arrayToReturn = []
		console.log(data)
		Object.keys(data).forEach(function(key){
			console.log("comparing " + data[key].ownerId + " and \n " + id)
			if(data[key].ownerId === id){
				arrayToReturn.push(data[key])
			}
		})
		return arrayToReturn
	}
}