import { Component, OnInit } from '@angular/core';
import { ses } from '../hero';
import {HttpClient , HttpHeaders, HttpClientModule} from '@angular/common/http';

import { Injectable, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';

import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';

import { AmpengService , CurrencyInfo_ampeng} from './ampeng.service';

type ost = OstInfo[];

interface OstInfo {
  c: string
  t: string
}


@Component({
  selector: 'app-ampeng',
  templateUrl: './ampeng.component.html',
  styleUrls: ['./ampeng.component.css']
})

export class AmpengComponent implements OnInit {



  currencyInfo_ampeng$: Observable<CurrencyInfo_ampeng[]>;

  postId : any;

     addPersone(e : string, a : string){

    this.http.post<any>('http://127.0.0.1:8050/ampeng' , {"curr" : e , "tf" : a }  ).subscribe(data => {
        this.postId = data.aa;
    })

    console.log(this.postId)

    }

  constructor( private service : AmpengService , private http: HttpClient  ) {

    this.currencyInfo_ampeng$ = service.getAllCurrencies_ampeng();

   }

  ngOnInit(): void {


  }


}


