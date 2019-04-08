import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux, select } from '@angular-redux/store';
import { CHANGE, INCREASE, DECREASE, RESET } from '../actions';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})

export class ManagerComponent implements OnInit, OnDestroy  {

  private readonly sourceTimer: Observable<number> = timer(1000, 1000);
  private timerSubsriber: Subscription;

  @select() 
  first: Observable<number>;
  @select() 
  second: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() { this.stop(); }

  start(): void {
    if (this.timerSubsriber && !this.timerSubsriber.closed) {
      return;
    }
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
    this.timerSubsriber = this.sourceTimer.subscribe(() => {
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
