import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

const ALTER_EGOS = ['Danny', 'Duan', 'DK'];

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private alterEgos = ALTER_EGOS;

  constructor() {
  }

  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = this.alterEgos.includes(alterEgo);
    return of(isTaken).pipe(delay(400));
  }

}
