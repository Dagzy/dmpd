import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  setType(typeNumber){
    this.category = typeNumber
  }

  category: number;
  amicable = {
    intro: [
      "hey", "yo"
    ],
    mid: [
      "memme", "mememe"
    ],
    end: [
      "sup", "bybebye"
    ]
  }
  blunt = {
    intro: [
      "oeoe", "loo"
    ],
    mid: [
      "sfdlj", "sheiof"
    ],
    end: [
      "sdfln", "bybebye"
    ]
  }
  harsh = {
    intro: [
      "oj", "op"
    ],
    mid: [
      "memme", "aefpi"
    ],
    end: [
      "sfoj", "bybebye"
    ]
  }
  pa = {
    intro: [
      "hehe", "eheh"
    ],
    mid: [
      "memme", "apijdc"
    ],
    end: [
      "sup", "acnd"
    ]
  }
  poems = {
    intro: [
      "jsjs", "sjsjs"
    ],
    mid: [
      "aoscuh", "mememe"
    ],
    end: [
      "anpjdv", "bybebye"
    ]
  }

  //amicable: amicable;
  //setting the datatype
  // titleDisplay: number;
  // amicableIntro: ["Hey you", "So... I've been thinking lately", "Can we talk for a bit?"];

  // name = 'mid';
  // checkboxValue: boolean = false;
  ngOnInit() { 
    
  }
  constructor() { }
  // showHide0(){
  //   this.amicable = false;
  // }
  // setType(typeNumber){
  //   if (!titleDisplay){
  //     showTitles
  //   }
  //   this.titleDisplay  = typeNumber
  // }
  
   addToMessage(){

   };

  //  changeIntro(index){
  //   intro = amiBeg[index]
  //  }

}
