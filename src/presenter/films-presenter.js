import {render} from '../render.js';
import {FILM_COUNT} from '../const.js';

import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/film-list-container-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmCardView from '../view/film-card/film-card-view.js';
import FilmDetailsView from '../view/film-details/film-details.js';


export default class FilmsPresenter {
  filterComponent = new FilterView();
  sortComponent = new SortView();
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();
  filmButtonMoreComponent = new FilmButtonMoreView();

  init = (container) => {
    this.container = container;

    render(this.filterComponent, this.container);
    render(this.sortComponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for(let i = 0; i < FILM_COUNT; i++) {
      render(new FilmCardView(), this.filmsListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmsListComponent.getElement());
  };
}
