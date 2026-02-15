import {generateFilmCard} from '../mock/film.js';

export default class FilmsModel {
  films = Array.from({length: 4}, (_, index) => generateFilmCard(index));

  get = () => this.films;

}
