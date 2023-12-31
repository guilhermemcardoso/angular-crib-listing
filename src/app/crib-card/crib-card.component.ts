import { Component, Input, OnInit } from '@angular/core';
import { Crib } from '../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css'],
})
export class CribCardComponent implements OnInit {
  @Input('crib') crib: Crib;
  @Input('showDetails') showDetails: boolean;
  constructor() {}

  ngOnInit() {}
}
