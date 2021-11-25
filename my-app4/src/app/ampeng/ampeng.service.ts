import { Injectable, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';

export type Currency_ampeng = CurrencyInfo_ampeng[];

export interface CurrencyInfo_ampeng {
  D1: string
  H1: string
  H4: string
  M1: string
  M15: string
  M5: string
  id: number
  name: string
}

@Injectable({ providedIn : "root"})
export class AmpengService implements OnDestroy {

  private allCurrencies_ampeng$: Observable<CurrencyInfo_ampeng[]>;

  private stopPolling_ampeng = new Subject();

  constructor(private http: HttpClient) {
    this.allCurrencies_ampeng$ = timer(1, 3000).pipe(
      switchMap(() => http.get<CurrencyInfo_ampeng[]>('http://127.0.0.1:8050/ampeng')),
      retry(),
      tap(console.log),
      share(),
      takeUntil(this.stopPolling_ampeng)
    );

  }


  getAllCurrencies_ampeng(): Observable<CurrencyInfo_ampeng[]> {
    return this.allCurrencies_ampeng$.pipe(
      tap(() => console.log('data sent to subscriber'))
    );
  }


  ngOnDestroy() {
      this.stopPolling_ampeng.next();
  }
}
