import {humaniseFilmDate, humanizeFilmDuration} from '../../utils.js';

const checkFilmDescriptionLength = (description, maxLength = 139) => {
  if(description.length <= maxLength) {
    return description;
  }

  let trimmedText = description.slice(0, maxLength - 1);
  trimmedText = trimmedText.replace(/\s+\S*$/, '');

  return trimmedText + '...';
}

export const createFilmCardInfoTemplate = (film) => {
  const { filmInfo: {release, runtime, description, title, totalRating, genre}, comments } = film;

 const filmReleaseDate = humaniseFilmDate(release.date, 'YYYY');
 const filmDuration = humanizeFilmDuration(runtime);
 const filmDescription = checkFilmDescriptionLength(description);

  return (`<a class="film-card__link">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${filmReleaseDate}</span>
      <span class="film-card__duration">${filmDuration}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
      <p class="film-card__description" title="${description}">${filmDescription}</p>
      <span class="film-card__comments">${comments.length >= 1 ? `${comments.length} comments` : `${comments.length} comment`} </span>
  </a>`);
}







