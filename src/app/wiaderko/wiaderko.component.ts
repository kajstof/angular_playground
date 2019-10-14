import { Component, OnInit } from '@angular/core';
import { Point } from '../model/Point';

@Component({
  selector: 'app-wiaderko',
  templateUrl: './wiaderko.component.html',
  styleUrls: ['./wiaderko.component.scss']
})
export class WiaderkoComponent implements OnInit {
  amount = 500;
  counter = 0;
  prop: string;
  jsonTest = {
    Hahaha: 'Rotfl',
    Foo: 'Bar'
  };
  newVar: string;
  point: Point = new Point(10, 20);

  constructor() { }

  ngOnInit() {
    this.prop = new Date().toISOString();
  }

  someFun(x: string) {
    this.counter++;
    this.jsonTest.Foo = x + this.counter;
  }

  deposit() {
    this.amount += 100;
  }

}
