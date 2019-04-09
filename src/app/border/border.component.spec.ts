import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { BorderComponent } from './border.component';
import { ValueComponent } from '../value/value.component';
import { By } from '@angular/platform-browser';
import 'zone.js/dist/zone-testing';
import { Observable } from 'rxjs';
import { SignPipe } from './sign.pipe';

describe('BorderComponent', () => {
  let component: BorderComponent;
  let fixture: ComponentFixture<BorderComponent>;
  const getFirst = () => fixture.debugElement.query(By.css('#first'));
  const getSecond = () => fixture.debugElement.query(By.css('#second'));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BorderComponent,
        ValueComponent,
        SignPipe,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create compo', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'BorderComponent'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('BorderComponent');
  });

  it(`should display default empty values`, () => {
    expect(getFirst().nativeElement.textContent.trim()).toBe("First value:");
    expect(getSecond().nativeElement.textContent.trim()).toBe("Second value:");
  });

  it(`should display updated values`, () => {
    const firstDivEl = getFirst();
    const secondDivEl = getSecond();
    const firstValue = 99;
    const secondValue = -232;

    component.first = new Observable(ob => {ob.next(firstValue)});
    component.second = new Observable(ob => {ob.next(secondValue)});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(firstDivEl.nativeElement.textContent.trim()).toContain(firstValue);
      expect(secondDivEl.nativeElement.textContent.trim()).toContain(secondValue);

      expect(firstDivEl.nativeElement.classList).toContain('positive');
      expect(firstDivEl.nativeElement.classList).not.toContain('negative');

      expect(secondDivEl.nativeElement.classList).toContain('negative');
      expect(secondDivEl.nativeElement.classList).not.toContain('positive');
    });
  });

  it(`should display not signed values`, () => {
    const firstDivEl = getFirst();
    const secondDivEl = getSecond();
    const firstValue = 0;
    const secondValue = 0;

    component.first = new Observable(ob => {ob.next(firstValue)});
    component.second = new Observable(ob => {ob.next(secondValue)});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(firstDivEl.nativeElement.textContent.trim()).toContain(firstValue);
      expect(secondDivEl.nativeElement.textContent.trim()).toContain(secondValue);

      expect(firstDivEl.nativeElement.classList).not.toContain('positive');
      expect(firstDivEl.nativeElement.classList).not.toContain('negative');

      expect(secondDivEl.nativeElement.classList).not.toContain('negative');
      expect(secondDivEl.nativeElement.classList).not.toContain('positive');
    });
  });

});
