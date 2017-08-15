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
  mid2: string;
  midArray=[];
  end: string;

  model = {
    title: "",
    intro: "", 
    mid: "",
    mid2: "",
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
  selectMid(word){
    this.mid2 = word;
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
    this.constructedMessage = (!!this.intro? this.intro : "") + " " + ((!!this.mid? this.mid : "") || (!!this.mid2? this.mid2 : "")) + " " + (!!this.end? this.end : "");
  }
  
  amicable = {
    intro: [ "Hey, friend. We need to talk.", "This won't be easy, but there’s something I need to get off my chest.", "I don’t think you will like this, but you need to hear it." ],
    mid: [ "I think we need a break.", "I don’t want to hold you back.", "I love you too much, and it scares me.", "You deserve someone better", "I don't deserve you.", "You deserve so much more than I can give.", "It’s not you. It’s me.", "I need to focus on me right now.", "I’m not sure what I want, but as long as I feel this way, it’s not fair to you.", "We’ve tried so hard to make this work, but I think it’s time to let go.", "I have a lot more growing to do before I’m ready for something like this.", "I love you but I’m not in love with you.", "I love you enough to want something better for you than what I can give.", "You deserve to find your perfect match. It’s just not me."],
    end: [ "I would like nothing more than to remain friends.", "We work better as friends, and I hope we can go back to the way things were.", "I really wish it could have worked out between us. I’m sorry it had to end like this.", "I’m sorry it had to end like this.", "I promise that someone out there is perfect for you. It’s just not me.", "I wish you all the best.", "I will always cherish the wonderful moments we’ve had.", "If you want to talk about this in person, please don’t hesitate to call." ]
  }
  blunt = {
    intro: [ "I’m breaking up with you.", "I’ll come right out and say it: I’m breaking up with you.", "It’s time to face the facts. We aren’t meant to be together." ],
    mid: [ "I just don’t want you.", "We aren’t right for each other.", "Our relationship is taking up too much of my time.", "I gave you too many chances. This was the last straw.", "I’m not going to say, “It’s not you; it’s me.” It clearly you.", "I don’t want to be stuck in a loveless relationship.", "Something about us doesn’t feel right, and I need to do something about it.", "I need something more.", "We’ve both changed and grown apart.", "Love shouldn’t be this hard.", "We are not each other’s soulmate.", "I never asked for a lot. All I ever wanted was to be liked by you for who I was, not for who you wanted me to be.", "Nothing can come close to the intensity with which I loved you, except maybe the intensity with which you took me for granted.", "You are not worth my love if you need reasons to find me worthy of yours." ],
    end: [ "I don’t think we should stay friends, so this is my last goodbye.", "Don’t try to convince me otherwise. I’ve already made up my mind.", "I just don’t see this working.", "This isn't working, and I don't think it ever will.", "Goodbye.", "This day would never have come if you loved me just as much as I have always loved you." ]
  }
  harsh = {
    intro: [ "I’m breaking up with you.", "Today is great because I’m dumping you!", "‘Tis a lovely day to leave you." ], 
    mid: [ "You are inferior to me.", "I deserve better.", "You don’t deserve me.", "You bore me.", "You’re beneath me.", "This isn’t worth the effort.", "You’re not worth the effort.", "I would have been better off if we had never met.", "I don’t love you anymore.", "I don’t love you anymore. In fact, I don't know if I ever did.", "You’re dragging me down.", "I need to make some changes in my life, and one of them is you.", "I hate being around you." ],
    end: [ "Never contact me again.", "I hope you find someone as terrible as you.", "I’m not sure who could love you, but I definitely know I don’t.", "Don’t come running back to me.", "Breaking up with you will always remain one of my best accomplishments.", "Don’t let the door hit you on the way out." ]
  }
  haikus = {
    intro: [ "Letting go is hard,", "I’m leaving you,", "I’m saying goodbye.", "I don’t deserve this.", "I need to tell you", "You bore me to tears.", "You bore me to death.", "You deserve better.", "Hey. We need to talk.", "I don't deserve this."],
    mid2: [ "and forgetting is harder,", "so this is my last goodbye.", "This loveless relationship", "Don’t come running back to me.", "that I'm breaking up with you.", "I don’t love you anymore.", "I can do better than you.", "Never contact me again.", "I need to focus on me.", "This isn’t worth the effort.", "I am breaking up with you.", "I’m better off without you."],
    end: [ "but I will succeed.", "Please don’t contact me.", "is over for good.", "I will turn you down.", "See you later, chump.", "Bye! See you never!", "I deserve better.", "Please leave me alone.", "Goodbye forever.", "Can we still be friends?", "That is all. Goodbye.", "This is for the best." ]
  }
  poems = {
    intro: [ "Roses are Red. Violets are blue." ],
    mid2: [ "Trash is dumped,", "I'm saying goodbye because", "I'm breaking up with you.", "I hate your face.", "You suck like a vacuum." ],
    end: [ "and so are you.", "I'm better off without you.", "Leave me the hell alone.", "I'm breaking up with you.", "It's not me; it's you." ]
  }

  ngOnInit() {
  }

// colon specifies type??..... create class after : and a class makes it own datatype
  constructor(private messageService: MessageService, private db: AngularFireDatabase, private http: HttpClient, private fb: FirebaseService){}
  onSubmit(makeMessage){
    this.messageService.makeMessage({title: this.model.title, text: this.constructedMessage}, this.fb.getUserId())
  }
}