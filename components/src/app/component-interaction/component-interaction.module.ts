import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentInteractionRoutingModule} from './component-interaction-routing.module';
import { InteractionComponent } from './interaction.component';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './vote-taker.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent.component';
import { CountdownViewChildComponent } from './countdown-view-child.component';


@NgModule({
  declarations: [
    InteractionComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildComponent,
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ]
})
export class ComponentInteractionModule {
}
