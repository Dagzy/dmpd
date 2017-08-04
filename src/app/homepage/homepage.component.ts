import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    messages= [
      'Hey, I\'m just writing to let you know that you suck. Goodbye.',
      'I want you to know that I am leaving forever.',
      'This is another breakup message!'
    ];
  constructor() {
  }
  ngOnInit() {
  }

}
