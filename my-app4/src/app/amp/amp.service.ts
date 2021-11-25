import { Injectable, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap, share, retry, takeUntil } from 'rxjs/operators';

export type Currency_amp = CurrencyInfo_amp[];

export interface CurrencyInfo_amp {
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
export class AmpService implements OnDestroy {

  private allCurrencies_amp$: Observable<CurrencyInfo_amp[]>;

  private stopPolling_amp = new Subject();

  constructor(private http: HttpClient) {
    this.allCurrencies_amp$ = timer(1, 3000).pipe(
      switchMap(() => http.get<CurrencyInfo_amp[]>('http://127.0.0.1:8050/amp')),
      retry(),
      tap(console.log),
      share(),
      takeUntil(this.stopPolling_amp)
    );

  }


  getAllCurrencies_amp(): Observable<CurrencyInfo_amp[]> {
    return this.allCurrencies_amp$.pipe(
      tap(() => console.log('data sent to subscriber'))
    );
  }


  ngOnDestroy() {
      this.stopPolling_amp.next();
  }
}
