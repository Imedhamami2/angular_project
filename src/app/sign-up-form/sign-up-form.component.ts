import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  
  lastName :string; password :string; city :string; firstName : string; email : string;
  
  zipCode: string;
  signUp : boolean = true;
  checkFirstName: boolean = true; checkCity: boolean = true; checkLastName: boolean = true; checkPass: boolean = true; checkZip: boolean = true; checkEmail: boolean = true;
  
  
  constructor() { }
  @Output() openSigIN = new EventEmitter<boolean>();


  ngOnInit(): void {
  }
  checkValue(){
    let re = /^[A-Za-z]+$/;
    let number = new RegExp(/^[0-9]+$/);
    let email = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/);
        if(re.test(this.firstName) || this.firstName.length==0)
          this.checkFirstName=true;
        else
          this.checkFirstName=false;

        if(re.test(this.lastName) || this.lastName.length==0) 
          this.checkLastName=true;
        else
          this.checkLastName=false;

        if(re.test(this.city) || this.city.length==0)
          this.checkCity=true;
        else
          this.checkCity=false;

        if(email.test(this.email) || this.email.length==0 )
          this.checkEmail=true;
        else
          this.checkEmail=false;

        if(this.password.length>=6 || this.password.length==0 )
          this.checkPass=true;
        else
          this.checkPass=false;

        if(number.test(this.zipCode) || this.zipCode.length==0)
          this.checkZip=true;
        else
          this.checkZip=false;



        

        }
        setSignUp(){
          this.openSigIN.emit(this.signUp);
        }


}
