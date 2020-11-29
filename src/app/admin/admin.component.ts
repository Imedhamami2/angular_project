import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  messageErreur:string;
  UserName :string;
  valeurfils:string;
  constructor() { }

  ngOnInit(): void {
    this.UserName ="test valeur du parent";
  }

  checkValue(){
    let numbers = new RegExp(/^[0-9]+$/);
    if(numbers.test(this.UserName))
      {
          //alert('code is numbers');
          this.messageErreur="Veuiller saisir une caractere"
      }
      
        }

  /**
   * lecture de la variable envoyé par le fils
   * @param valeur 
   */
    readvaluefromchild(valeur: string){
      this.valeurfils=valeur;
    }
   }

