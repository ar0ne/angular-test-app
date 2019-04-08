import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { BorderComponent } from './border/border.component';
import { ValueComponent } from './value/value.component';
import { NgReduxModule } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { PositivityPipe } from './border/positivity.pipe';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgReduxModule,
        AppRoutingModule,
      ],
      declarations: [
        AppComponent,
        BorderComponent,
        ValueComponent,
        ManagerComponent,
        PositivityPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have default title`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(component.title);
  });

});
