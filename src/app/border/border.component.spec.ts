import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { BorderComponent } from './border.component';
import { ValueComponent } from '../value/value.component';
import { By } from '@angular/platform-browser';
import 'zone.js/dist/zone-testing';
import { Observable } from 'rxjs';
import { PositivityPipe } from './positivity.pipe';

describe('BorderComponent', () => {
  let component: BorderComponent;
  let fixture: ComponentFixture<BorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BorderComponent,
        ValueComponent,
        PositivityPipe,
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
    const firstDivEl = fixture.debugElement.query(By.css('#first'));
    const secondDivEl = fixture.debugElement.query(By.css('#second'));
    
    expect(firstDivEl.nativeElement.textContent.trim()).toBe("First value:");
    expect(secondDivEl.nativeElement.textContent.trim()).toBe("Second value:");
  });

  it(`should display updated values`, () => {
    fixture.detectChanges();
    const firstDivEl = fixture.debugElement.query(By.css('#first'));
    const secondDivEl = fixture.debugElement.query(By.css('#second'));
    const firstValue = 99;
    const secondValue = -232;

    component.first = new Observable(ob => {ob.next(firstValue)});
    component.second = new Observable(ob => {ob.next(secondValue)});

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(firstDivEl.nativeElement.textContent.trim()).toBe(`First value: ${firstValue}`);
      expect(secondDivEl.nativeElement.textContent.trim()).toBe(`Second value: ${secondValue}`);

      expect(firstDivEl.nativeElement.classList).toContain('positive');
      expect(firstDivEl.nativeElement.classList).not.toContain('negative');

      expect(secondDivEl.nativeElement.classList).toContain('negative');
      expect(secondDivEl.nativeElement.classList).not.toContain('positive');
    });
  });

});
