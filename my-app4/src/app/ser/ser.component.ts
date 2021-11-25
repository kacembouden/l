
import { Component, Input, VERSION ,OnInit} from '@angular/core';
import { MockServerService  } from './ser.service';
import { Stock } from './ser.service';
import {
  ColDef,
  ColumnApi,
  GetRowNodeIdFunc,
  GridApi,
  GridReadyEvent,
  ValueGetterParams
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { formatCurrency } from '@angular/common';



@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.css'],
  providers: [MockServerService]
})
export class SerComponent implements OnInit {

  data : any;

    pointObject = {
    currency : '',
    tf : '',
    val : 'r'
      };


  constructor(private mockServerService: MockServerService) {

    this.mockServerService.getDataObservable('http://127.0.0.1:8050/').subscribe((response) => {
      this.data = response;
      console.log(this.data[0]["D1"]);
        });

    }

  ngOnInit(): void {

  }

}
