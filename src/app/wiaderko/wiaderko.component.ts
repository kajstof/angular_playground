import { Component, OnInit } from '@angular/core';
import { Point } from '../model/Point';

@Component({
  selector: 'app-wiaderko',
  templateUrl: './wiaderko.component.html',
  styleUrls: ['./wiaderko.component.scss']
})
export class WiaderkoComponent implements OnInit {
  amount: number = 500;
  counter: number = 0;
  prop: string;
  json_test = {
    'Hahaha': 'Rotfl',
    'Foo': 'Bar'
  };
  new_var: string;
  point: Point = new Point(10, 20);

  constructor() { }

  ngOnInit() {
    this.prop = new Date().toISOString();
  }

  someFun(x: string) {
    this.counter++;
    this.json_test.Foo = x + this.counter;
  }

  deposit() {
    this.amount += 100;
  }

}
