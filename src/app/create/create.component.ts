import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  setType(typeNumber){
    this.category = typeNumber;
  }

  //  addToMessage(selectedIntro: string): void {
  //   function captureValue(){
  //     if (selectedIntro){return};
  //     this.intro[""]
  //       .then(selectedIntro =>{
  //         this.intro.push(selectedIntro);
  //       })
  //   }
  //  };
  // onSelect(intro: selectedIntro): void {
  //   this.selectedIntro = intro;
  // }
  // onSelect(sentence.selectedIntro: string) {
  //   return sentence.selectedIntro
  // }

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
    console.log(word)
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
    console.log(this.constructedMessage);
  }

  amicable = {
    intro: [ "amicable intro", "yo" ],
    mid: [ "memme", "mememe" ],
    end: [ "sup", "bybebye" ]
  }
  blunt = {
    intro: [ "blunt oeoe", "loo" ],
    mid: [ "sfdlj", "sheiof" ],
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

  constructor() { }
  
  
}
// export class who {
//   selectedIntro = true;
// }
// export class selectedIntro{
//   intro: string;

// }