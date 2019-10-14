import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Point } from 'src/app/model/Point';

@Component({
  selector: 'app-grabki',
  templateUrl: './grabki.component.html',
  styleUrls: ['./grabki.component.scss']
})
export class GrabkiComponent implements OnInit {
  @Input() point: Point;
  @Output() pointChange = new EventEmitter<Point>();

  @Input() amount: number;
  @Output() amountChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  withdraw() {
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }

  updatePoint() {
    let x: Point = new Point(1 , 1);
    x.incrPoint();
    this.pointChange.emit(x);
  }

}
