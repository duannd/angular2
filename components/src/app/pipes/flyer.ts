export interface Flyer {
  name: string;
  canFly: boolean;
}

export const FLYERS: Flyer[] = [
  {name: 'Windstorm', canFly: true},
  {name: 'Bombasto', canFly: false},
  {name: 'Magneto', canFly: false},
  {name: 'Tornado', canFly: true}
];
