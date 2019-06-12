export enum Genres {
  Action = 'action',
  Adventure = 'adventure',
  Biography = 'biography',
  Comedy = 'comedy',
  Crime = 'crime',
  Drama = 'drama',
  History = 'history',
  Mystery = 'mystery',
  Scifi = 'scifi',
  Sport = 'sport',
  Thriller = 'thriller'
}

export class Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array<Genres>;
  rate: string;
  length: string;
  img: string;
}

export interface Movies {
    searchTerm: null;
    list: Movie[];
    filters: any;
  }
