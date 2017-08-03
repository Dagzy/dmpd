import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
 create = [
  { category: 'Amicable', intro: '', mid: '', end: ''}
 ];

  constructor() { }

  ngOnInit() {
  }

}
