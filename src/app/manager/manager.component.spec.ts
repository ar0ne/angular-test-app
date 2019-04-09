import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import { BorderComponent } from '../border/border.component';
import { ValueComponent } from '../value/value.component';
import { NgReduxModule } from '@angular-redux/store';
import { SignPipe } from '../border/sign.pipe';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';

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

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

 

});
