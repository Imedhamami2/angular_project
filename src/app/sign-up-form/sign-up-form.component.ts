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
  signUp : boolean = true;
  chekFirstName :boolean = true;
  constructor() { }
  @Output() openSigIN = new EventEmitter<boolean>();
 


  ngOnInit(): void {
  }
  checkValue(){
    let re = /^[A-Za-Z]+$/;
    
    if(re.test(this.firstName))
        this.chekFirstName=true;
    else
        this.chekFirstName=false;
      
      
        }
        setSignUp(){
          
          this.openSigIN.emit(this.signUp);
      
      
        }


}
