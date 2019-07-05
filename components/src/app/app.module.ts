import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';
import {TemplateModule} from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
