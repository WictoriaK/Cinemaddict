import {humaniseFilmDate} from '../../utils';

const createCommentTemplate = ({author, comment, date, emotion}) => {
  const commentDate = humaniseFilmDate(date, 'YYYY/M/DD hh:mm')

  return (`<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
        </span>
        <div>
          <p class="film-details__comment-text">${comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${commentDate}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`);
}



export const createFilmDetailsCommentsTemplate = (comments) =>
  `<ul class="film-details__comments-list">
     ${comments.map(createCommentTemplate).join('')}
   </ul>`;
