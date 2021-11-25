import { Component, OnInit } from '@angular/core';
import { ses } from '../hero';
import {HttpClient , HttpHeaders, HttpClientModule} from '@angular/common/http';

import { Injectable, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';

import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';

import { AmpService , CurrencyInfo_amp} from './amp.service';

type ost = OstInfo[];

interface OstInfo {
  c: string
  t: string
}


@Component({
  selector: 'app-amp',
  templateUrl: './amp.component.html',
  styleUrls: ['./amp.component.css']
})

export class AmpComponent implements OnInit {



  currencyInfo_amp$: Observable<CurrencyInfo_amp[]>;

  postId : any;

     addPersone(e : string, a : string){

    this.http.post<any>('http://127.0.0.1:8050/amp' , {"curr" : e , "tf" : a }  ).subscribe(data => {
        this.postId = data.aa;
    })

    console.log(this.postId)

    }

  constructor( private service : AmpService , private http: HttpClient  ) {

    this.currencyInfo_amp$ = service.getAllCurrencies_amp();

   }

  ngOnInit(): void {


  }


}


