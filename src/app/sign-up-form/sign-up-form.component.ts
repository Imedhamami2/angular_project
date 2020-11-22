import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  firstName : string;
  lastName :string;
  zipCode: number;
  messageErreur:string;
  signUp : boolean = true;
  constructor() { }
  @Output() openSigIN = new EventEmitter<boolean>();


  ngOnInit(): void {
  }
  checkValue(){
    let numbers = new RegExp(/^[0-9]+$/);
    if(numbers.test(this.firstName))
      {
          //alert('code is numbers');
          this.messageErreur="Veuiller saisir une caractere"
      }
      
        }
        setSignUp(){
          
          this.openSigIN.emit(this.signUp);
      
      
        }


}
