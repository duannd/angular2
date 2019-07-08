export class Hero {

  constructor(public id: number, public  name: string) {

  }

}

export const HEROES: Hero[] = [
  new Hero(1, 'Danny'),
  {id: 2, name: 'KH'},
  {id: 3, name: 'Baby'},
  {id: 4, name: 'DK'}
];
