export enum MovieListTypes {
  Action = "action",
  Comedy = "comedy",
  Horror = "horror",
  SciFi = "sci-fi",
  Romance = "romance",
  Korean = "korean",
  Anime = "anime",
}

export interface IMovieListFilter {
  label: string;
  value?: MovieListTypes;
}

export interface IMovieListResults {
  adult: boolean;
  backdropPath: string;
  genreIds: Array<number>;
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface IMovieList {
  results: Array<IMovieListResults>;
}
