import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  create = [
    { category: 'amicable', intro: '', mid: '', end: ''},
    { category: 'blunt', intro: '', mid: '', end: ''},
    { category: 'harsh', intro: '', mid: '', end: ''},
    { category: 'pa', intro: '', mid: '', end: ''},
    { category: 'poems', intro: '', mid: '', end: ''}
  ];
  
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
