import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit, OnDestroy {



  myO : Observable<Array<number>>= Observable.create((observer : Observer<Array<number>>) => {
    let arr = []
    setInterval(() => {
      arr.push(arr.length)
      observer.next(arr)
    },90000000)
    

  })
  mySub : Subscription
  myArr : Array<number> = []

  constructor() { }

  ngOnInit() {
    this.myO.subscribe(arr => this.myArr = arr)
  }

    ngOnDestroy(){ 
    }

    }
