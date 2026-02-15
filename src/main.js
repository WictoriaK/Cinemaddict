import {render} from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FooterStatisticsTemplateView from './view/footer-statistics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './model/film-model.js';
import CommentsModel from './model/comments-model.js';

const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), siteHeaderElement);
render(new FooterStatisticsTemplateView(), siteFooterStatisticsElement);


filmsPresenter.init(siteMainElement, filmsModel, commentsModel);
