import {EMOTIONS} from '../const.js';
import {getRandomArrayElement} from '../utils';

const getCommentsCount = (films) => films.reduce((count, film) => count + film.comments.length, 0);

const generateComment = (index) => ({
  id: index,
  author: 'Ilya O`Reilly',
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  date: '2019-05-11T16:12:32.554Z',
  emotion: getRandomArrayElement(EMOTIONS)
});


export const generateComments = (films) => {
  const commentCount = getCommentsCount(films) ;

  return Array.from({length: commentCount}, (_, index) => generateComment(index));
}

