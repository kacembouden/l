import { Component, OnInit, Input } from '@angular/core';

interface PointInterface {
    currency : string;
    tf : string;
    val : string;
  }


@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CeComponent implements OnInit {

  b : any;

  bgcolor = ''
  txtcolor = ''



  @Input() point : PointInterface;
  constructor() {

    this.point = {} as PointInterface;

  }

  ngOnInit(): void {

     if (this.point.val == 'r') {
        this.bgcolor = 'danger';
        this.txtcolor = 'danger';
        }

  }




}
