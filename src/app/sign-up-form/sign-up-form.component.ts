import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit{
  
  currentUser: UserInformation = {lastName :'', password :'', city :'', firstName : '', email : '',zipCode: ''};
  
  signUp : boolean = true;
  checkFirstName: boolean = true; checkCity: boolean = true; checkLastName: boolean = true; checkPass: boolean = true; checkZip: boolean = true; checkEmail: boolean = true;
  
  
  constructor() { }
  @Output() openSigIN = new EventEmitter<boolean>();


  ngOnInit(): void {
  }
  checkText(){
    let re = /^[A-Za-z]+$/;
        if(re.test(this.currentUser.firstName) || this.currentUser.firstName.length==0)
          this.checkFirstName=true;
        else
          this.checkFirstName=false;

        if(re.test(this.currentUser.lastName) || this.currentUser.lastName.length==0) 
          this.checkLastName=true;
        else
          this.checkLastName=false;

        if(re.test(this.currentUser.city) || this.currentUser.city.length==0)
          this.checkCity=true;
        else
          this.checkCity=false;  
  }
  checkNumber(){
    let number = new RegExp(/^[0-9]+$/);
    if(number.test(this.currentUser.zipCode) || this.currentUser.zipCode.length==0)
      this.checkZip=true;
    else
      this.checkZip=false;
  }
  checkEmailFn(){
    let email = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/);
    if(email.test(this.currentUser.email) || this.currentUser.email.length==0 )
          this.checkEmail=true;
        else
          this.checkEmail=false;
  }
  checkPassword(){
    if(this.currentUser.password.length>=6 || this.currentUser.password.length==0 )
          this.checkPass=true;
        else
          this.checkPass=false; 
  }
  setSignUp(){
    this.openSigIN.emit(this.signUp);
  }

}
interface UserInformation{
  lastName :string,
  password :string,
  city :string;
  firstName : string,
  email : string,
  zipCode: string
}
