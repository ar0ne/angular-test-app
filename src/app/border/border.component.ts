import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit {

  @select() first;
  @select() second;
  @select() lastUpdate;

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  ngOnInit() {
  }

}
