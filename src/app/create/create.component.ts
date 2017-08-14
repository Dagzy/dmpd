import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messageService';
import { FirebaseService }  from '../services/authService';
import {User} from '../models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  setType(typeNumber){
    this.category = typeNumber;
  }

  constructedMessage: string;
  constructedTitle: string;
  category: number;
  title: string;
  intro: string;
  mid: string;
  midArray=[];
  end: string;

  model = {
    title: "",
    intro: "",
    mid: "",
    end: ""
  }

  selectIntro(word){
    this.intro = word;
    this.updateMessage();
  }
  appendToMid(word){
    if(this.midArray.includes(word))
      // tskes away stuff. at index of teh word take one
      this.midArray.splice(this.midArray.indexOf(word), 1)
    else
      this.midArray.push(word);
    // takes array and convert to string
    // ["hi","hello","wassup"] -> "hi,hello,wassup" -> the () makes it a spacr nit a ,
    this.mid = this.midArray.join(" ");
    this.updateMessage();
  }
  selectEnd(word){
    this.end = word;
    this.updateMessage();
  }
  updateTitle(){
    this.constructedTitle = (!!this.title? this.title : "");
  }
  updateMessage(){
    //ternary. if this is true, put; if not, noth9ng
    // null -> true -> false   for the !!
    this.constructedMessage = (!!this.intro? this.intro : "") + " " + (!!this.mid? this.mid : "") + " " + (!!this.end? this.end : "");
  }

  amicable = {
    intro: [ "amicable intro", "yo" ],
    mid: [ "memme", "mememe", "heyoheyoeyheyeohyeohyoeheyobsfbis shefouhsoeuhfous " ],
    end: [ "sup", "bybebye" ]
  }
  blunt = {
    intro: [ "blunt oeoe", "loo" ],
    mid: [ "sfdlj", "sheiof", "shefonsoiefnosh sjhdfohnsoefj snefosnofi jvnoshefo jwosf" ],
    end: [ "sdfln", "bybebye" ]
  }
  harsh = {
    intro: [ "harsh oj", "op" ],
    mid: [ "memme", "aefpi" ],
    end: [ "sfoj", "bybebye" ]
  }
  pa = {
    intro: [ "hehe", "eheh" ],
    mid: [ "memme", "apijdc" ],
    end: [ "sup", "acnd" ]
  }
  poems = {
    intro: [ "jsjs", "sjsjs" ],
    mid: [ "aoscuh", "mememe" ],
    end: [ "anpjdv", "bybebye", "more", "mmoorree" ]
  }

  ngOnInit() {
  }
  updateMsg(id){//query message by id to populate field on create with existing message
    this.db.database.ref('/messages').on("value", function(data){
      Object.keys(data.val()).forEach(function(key){
        if(id===key){
          return data.val()[key]
        }
      })
    })
  }

// colon specifies type??..... create class after : and a class makes it own datatype
  constructor(private messageService: MessageService, private db: AngularFireDatabase, private http: HttpClient, private fb: FirebaseService){}
  onSubmit(makeMessage){
    this.messageService.makeMessage({title: this.model.title, text: this.constructedMessage}, this.fb.getUserId())
  }
}
