import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderComponent } from './border/border.component';
import { ValueComponent } from './value/value.component';
import { ManagerComponent } from './manager/manager.component';
import { PositivityPipe } from './border/positivity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BorderComponent,
    ValueComponent,
    ManagerComponent,
    PositivityPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
