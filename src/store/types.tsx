/**
 * All the interfaces!!
 */

export interface IState {
  list: Array<IEpisode>
  error: null | string
  favorites: Array<any>
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  rating: { average: number };
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
  _links: { self: { href: string } };
}

