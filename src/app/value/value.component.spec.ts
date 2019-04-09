import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueComponent } from './value.component';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ValueComponent', () => {
  let component: ValueComponent;
  let fixture: ComponentFixture<ValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ValueComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'BorderComponent'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('ValueComponent');
  });

  it(`should display values`, () => {
    fixture.detectChanges();
    const firstDivEl = fixture.debugElement.query(By.css('#first'));
    const secondDivEl = fixture.debugElement.query(By.css('#second'));
    const firstValue = 99;
    const secondValue = -232;

    component.first = new Observable(ob => {ob.next(firstValue)});
    component.second = new Observable(ob => {ob.next(secondValue)});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(firstDivEl.nativeElement.textContent.trim()).toContain(firstValue);
      expect(secondDivEl.nativeElement.textContent.trim()).toContain(secondValue);
    });
  });

});
