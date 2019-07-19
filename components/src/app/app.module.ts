import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';
import {TemplateModule} from './template/template.module';
import {UserInputComponent} from './user-input/user-input.component';
import {LifecycleHooksModule} from './lifecycle-hooks/lifecycle-hooks.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    LifecycleHooksModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
