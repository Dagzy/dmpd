import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messageService';
import { FirebaseService }  from '../services/authService';
import {User} from '../models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';

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
  category: number;
  intro: string;
  mid: string;
  midArray=[];
  end: string;

  model = {
    intro: "", 
    mid: "",
    end: ""
  }
  selectIntro(word){
    // console.log(word)
    this.intro = word
    this.updateMessage();
  }

  // appendToMid(){
  //   this.mid.push(this.model.mid);
  //   this.updateMessage();
  // }
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
  updateMessage(){
    //ternary. if this is true, put; if not, noth9ng
    // null -> true -> false   for the !!
    this.constructedMessage = (!!this.intro? this.intro : "") + " " + (!!this.mid? this.mid : "") + " " + (!!this.end? this.end : "");
    // make it this.mid.push???
    // console.log(this.constructedMessage);
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
    end: [ "anpjdv", "bybebye", "more", "more" ]
  }

  ngOnInit() { 
    
  }
  
  // public intro: Array<string>;
  // constructor(){
  //   this.intro = [amicable]
  // }
  // public selectIntro(sentence){
  //   alert()
  // }


  // constructor(public MessageService:MessageService){
  //   this.MessageService.index(constructedMessage => 
  //     this.index = constructedMessage
  //   )
  // }

  // onSubmit(){
  //   this.MessageService.constructedMessage(constructedMessage)
  //     .then(() => {
  //       this.router.navigateByUrl('/messages')
  //   })
  //   .catch((e) => {
	// 		console.log(e);
	// 	})
  // }

  // myData = {description: 'Data I want to pass, could be any kind of data/ object'}
  // this.http.post('https://my-api.com/endpoint', myData)
  //   .map(
  //       (response: Response) => {
  //           // map() is totally optional, you just subscribe() without it!
  //           return response.json(); // fetch the body of the response - this of course also works for post requests
  //       }
  //   )
  //   .subscribe(
  //       (transformedData: any) => {
  //           // Use your response data here
  //           console.log(transformedData);
  //       }
  //   );

}

