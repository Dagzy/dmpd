import { Message } from '../models/message'
import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export default class MessageService{

	makeMessage(theMessage, userId){
		theMessage.ownerId = userId
		this.db.database.ref('/messages').push(theMessage)
	}

	constructor(private db: AngularFireDatabase){
		
	}
}