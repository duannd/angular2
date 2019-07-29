import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayingDataComponent} from './displaying-data/displaying-data.component';
import {TemplateModule} from './template/template.module';
import {UserInputComponent} from './user-input/user-input.component';
import {LifecycleHooksModule} from './lifecycle-hooks/lifecycle-hooks.module';
import {ComponentInteractionModule} from './component-interaction/component-interaction.module';
import {DynamicLoaderComponent} from './dynamic-loader/dynamic-loader.component';
import {AdDirective} from './dynamic-loader/ad.directive';
import {AdBannerComponent} from './dynamic-loader/ad-banner.component';
import {HeroJobAdComponent} from './dynamic-loader/hero-job-ad.component';
import {HeroProfileComponent} from './dynamic-loader/hero-profile.component';
import {AdService} from './dynamic-loader/ad.service';
import {AngularElementsComponent} from './angular-elements/angular-elements.component';
import {PopupService} from './angular-elements/popup.service';
import {PopupComponent} from './angular-elements/popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AttributeDirectivesComponent} from './attribute-directives/attribute-directives.component';
import {HighlightDirective} from './attribute-directives/highlight.directive';
import {StructuralDirectivesComponent} from './structural-directives/structural-directives.component';
import {UnlessDirective} from './structural-directives/unless.directive';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent,
    UserInputComponent,
    DynamicLoaderComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AngularElementsComponent,
    PopupComponent,
    AttributeDirectivesComponent,
    HighlightDirective,
    StructuralDirectivesComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    LifecycleHooksModule,
    ComponentInteractionModule,
    PipesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent,
    PopupComponent,
  ],
  providers: [
    AdService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
