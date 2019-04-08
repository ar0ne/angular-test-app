import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import { BorderComponent } from '../border/border.component';
import { ValueComponent } from '../value/value.component';
import { NgReduxModule } from '@angular-redux/store';
import { PositivityPipe } from '../border/positivity.pipe';

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ManagerComponent,
        BorderComponent,
        ValueComponent,
        PositivityPipe,
      ],
      imports: [
        NgReduxModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
