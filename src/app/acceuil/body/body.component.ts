import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 

  constructor() { }
  message : boolean =true ;

  ngOnInit(): void {
  }
  recieveMessage($event){
    this.message = $event;
  }

  
}
