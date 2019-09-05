import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Crisis} from './crisis';
import {CRISES} from './mock-crisis';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor() {
  }

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = {id: CrisisService.nextCrisisId++, name};
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
