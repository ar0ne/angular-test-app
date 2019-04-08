import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {

  @Input() first: number;
  @Input() second: number;

  constructor(
  ) { }

  ngOnInit() {
  }

}
