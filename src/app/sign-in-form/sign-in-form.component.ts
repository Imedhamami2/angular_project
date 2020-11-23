import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  email : string;
  password :string;
  checkEmail: boolean = true;
  checkPass: boolean = true;

signIn : boolean = true;

  constructor() { }
  @Output() openSignUP = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  checkEmailFn(){
    let email = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/);
    if(email.test(this.email) || this.email.length==0 )
          this.checkEmail=true;
        else
          this.checkEmail=false;
  }
  checkPassword(){
    if(this.password.length>=6 || this.password.length==0 )
          this.checkPass=true;
        else
          this.checkPass=false; 
  }
  setSignIn(){
    this.signIn=false;
    this.openSignUP.emit(this.signIn);


  }

}
