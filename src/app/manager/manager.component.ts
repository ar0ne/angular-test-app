import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { CHANGE, INCREASE, DECREASE } from '../actions';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  timer: Subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  start(): void {
    this.ngRedux.dispatch({
      type: CHANGE, 
    });
    this.oberserableTimer();
  }


  oberserableTimer() {
    const source = timer(1000, 1000);
    this.timer = source.subscribe(val => {
      this.ngRedux.dispatch({
        type: INCREASE
      });
      this.ngRedux.dispatch({
        type: DECREASE
      })
    });
    
  }

}
