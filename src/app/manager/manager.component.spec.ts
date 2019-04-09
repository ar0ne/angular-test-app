import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import { BorderComponent } from '../border/border.component';
import { ValueComponent } from '../value/value.component';
import { MockNgRedux, NgReduxTestingModule } from '@angular-redux/store/testing';
import { SignPipe } from '../border/sign.pipe';
import { RESET, INCREASE, DECREASE, CHANGE } from '../actions';
import { Subscription } from 'rxjs';

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ 
        ManagerComponent,
        BorderComponent,
        ValueComponent,
        SignPipe,
      ],
      providers: [
        MockNgRedux
      ],
      imports: [NgReduxTestingModule],
    })
    .compileComponents();

    MockNgRedux.reset();

    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch reset action', () => {
    const expectedAction = {
      type: RESET,
    };

    const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    component.reset();
    expect(spy).toHaveBeenCalledWith(expectedAction);
  });

  it('should unsubscribe timer', async(() => {
    component['timerSubsriber'] = new Subscription();
    const spy = spyOn(component['timerSubsriber'], 'unsubscribe');
    component.stop();
    expect(spy).toHaveBeenCalled();
  }));

  it('should block creation of new timer if its alredy started', async(() => {
    component['timerSubsriber'] = new Subscription();
    component.start();

    const spyMockRedux = spyOn(MockNgRedux.getInstance(), 'dispatch');
    expect(spyMockRedux).not.toHaveBeenCalled();

  }));
});
