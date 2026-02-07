import {render} from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import FooterStatisticsTemplateView from './view/footer-statistics-view.js';
import FilmsPresenter from './presenter/films-presenter.js';

const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), siteHeaderElement);
render(new FooterStatisticsTemplateView(), siteFooterStatisticsElement);


filmsPresenter.init(siteMainElement);
