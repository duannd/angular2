import {Component, OnDestroy, OnInit} from '@angular/core';
import {MissionService} from './mission.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-mission-control',
  template: `
      <h2>Mission Control</h2>
      <button (click)="announce()">Announce mission</button>
      <app-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut"></app-astronaut>
      <h3>History</h3>
      <ul>
          <li *ngFor="let event of history">{{event}}</li>
      </ul>
  `,
  styles: [],
  providers: [MissionService]
})
export class MissionControlComponent implements OnInit, OnDestroy {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  confirmSub: Subscription;

  constructor(private missionService: MissionService) {
    this.confirmSub = missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.confirmSub) {
      console.log('Mission Control unsubscribe');
      this.confirmSub.unsubscribe();
    }
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
