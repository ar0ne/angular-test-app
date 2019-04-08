import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  ngOnInit() {
  }

}
