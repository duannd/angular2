import {Pipe, PipeTransform} from '@angular/core';
import {Flyer} from './flyer';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: Flyer[]): Flyer[] {
    return allHeroes.filter(hero => hero.canFly);
  }

}

/////// Identical except for the pure flag
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {
}
