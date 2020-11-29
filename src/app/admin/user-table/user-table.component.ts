import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input ('dataParent') valeurParent:String;
  // declaration une variable de type Eventeur
  @Output() valeurFils = new EventEmitter<string>();
  datafils:string;
  constructor() { }

  ngOnInit(): void {
    this.datafils="Welcome to admin page"
  }

  /**
   * Creation d'une methode pour envoyer les données du fils vers le parent
   */
  datafromChildtoParent(){
    // envoie de la variable avec emit
    this.valeurFils.emit(this.datafils);
  }
}

