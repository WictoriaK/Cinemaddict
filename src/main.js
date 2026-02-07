import {render} from './render.js';
import FilterView from './view/filter-view.js';


const siteMainElement = document.querySelector('.main');


render(new FilterView(), siteMainElement);
