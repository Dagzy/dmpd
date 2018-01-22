import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/messageService';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from '../services/authService';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  message: string;
  title: string;
  model = {
    title: "",
    message: ""
  }
  constructor(private router: Router, private route: ActivatedRoute, private msgs: MessageService, private db: AngularFireDatabase,
    private fb: FirebaseService) {
    this.route.params.subscribe((params) => {
      this.msgs.getMsgbyId(params.id).then((message) => {
        this.model.title = message.title;
        this.model.message = message.text;
      })
    });
   }

  updateMessage(makeMessage){
      this.route.params.subscribe((params) => {
        this.msgs.update(params.id, this.model.title, this.model.message);
      })
    }

  ngOnInit() {
  }

}
// makeMessage(theMessage, userId){ //function that takes in a message object and a user Id
//   theMessage.ownerId = userId //adds the Id to the message object
//   this.db.database.ref('/messages').push(theMessage) //adds it to the database
// }
