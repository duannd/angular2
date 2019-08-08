import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {UniqueAlterEgoValidatorDirective} from './shared/alter-ego.directive';
import {ForbiddenNameDirective} from './shared/forbidden-name.directive';
import {IdentityRevealedDirective} from './shared/identity-revealed.directive';
import {HeroFormTemplateComponent} from './hero-form-template/hero-form-template.component';
import {HeroFormReactiveComponent} from './hero-form-reactive/hero-form-reactive.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DynamicFormsChildComponent } from './dynamic-forms/dynamic-forms-child.component';
import { DynamicFormsQuestionComponent } from './dynamic-forms/dynamic-forms-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    FormValidationComponent,
    UniqueAlterEgoValidatorDirective,
    ForbiddenNameDirective,
    IdentityRevealedDirective,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    DynamicFormsComponent,
    DynamicFormsChildComponent,
    DynamicFormsQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
