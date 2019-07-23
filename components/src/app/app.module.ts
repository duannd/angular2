import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';
import {TemplateModule} from './template/template.module';
import {UserInputComponent} from './user-input/user-input.component';
import {LifecycleHooksModule} from './lifecycle-hooks/lifecycle-hooks.module';
import {ComponentInteractionModule} from './component-interaction/component-interaction.module';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { AdDirective } from './dynamic-loader/ad.directive';
import { AdBannerComponent } from './dynamic-loader/ad-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent,
    UserInputComponent,
    DynamicLoaderComponent,
    AdDirective,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    LifecycleHooksModule,
    ComponentInteractionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
