import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

signIn : boolean = true;

  constructor() { }
  @Output() openSignUP = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  setSignIn(){
    this.signIn=false;
    this.openSignUP.emit(this.signIn);


  }

}
