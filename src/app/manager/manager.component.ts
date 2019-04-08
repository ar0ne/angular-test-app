import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux, select } from '@angular-redux/store';
import { CHANGE, INCREASE, DECREASE, RESET } from '../actions';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  private readonly sourceTimer = timer(1000, 1000);
  timerSubsriber: Subscription;

  @select() first;
  @select() second;
  @select() lastUpdate;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  start(): void {
    this.ngRedux.dispatch({
      type: CHANGE, 
    });
    this.startTimer();
  }

  stop(): void {
    if (this.timerSubsriber) {
      this.timerSubsriber.unsubscribe();
    }
  }

  reset(): void {
    this.ngRedux.dispatch({
      type: RESET,
    })
  }

  private startTimer(): void {
    this.timerSubsriber = this.sourceTimer.subscribe(val => {
      this.ngRedux.dispatch({
        type: INCREASE
      });
      this.ngRedux.dispatch({
        type: DECREASE
      });
      this.ngRedux.dispatch({
        type: DECREASE
      });
    });
  }

}
