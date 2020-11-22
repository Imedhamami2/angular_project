import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  messageErreur:string;
  UserName :string;

  constructor() { }

  ngOnInit(): void {}

  checkValue(){
    let numbers = new RegExp(/^[0-9]+$/);
    if(numbers.test(this.UserName))
      {
          //alert('code is numbers');
          this.messageErreur="Veuiller saisir une caractere"
      }
      
        }
   }

