import {getRandomArrayElement, getRandomFloatNumber, getRandomPositiveInteger} from '../utils.js';
import {MAX_COMMENTS_COUNT} from '../const.js';


const filmsTitles = ['Fast and Furious', 'Soul', 'IT', 'Now you can see me'];
const alternativeTitles = ['Unbelievable', 'Country On Him', 'Raiders With The Carpet', 'Guest Who Sold The Darkness'];
const hasComments = getRandomPositiveInteger(0, 1);

const generateComments = () => {
  let totalCommentsCount = 0;

  const filmCommentsCount = (hasComments) ? getRandomPositiveInteger(1, MAX_COMMENTS_COUNT) :  0;

  totalCommentsCount = +filmCommentsCount;

  return Array.from({length: filmCommentsCount}, (_, index) => (totalCommentsCount - index));
}


export const generateFilmCard = (index) => ({
  id: index,
  comments: (hasComments) ? generateComments() : [],
  filmInfo: {
    title: getRandomArrayElement(filmsTitles),
    alternativeTitle: getRandomArrayElement(alternativeTitles),
    totalRating: getRandomFloatNumber(1, 10),
    poster: 'images/posters/blue-blazes.jpg',
    ageRating: getRandomPositiveInteger(0, 65),
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano',
      'Morgan Freeman'
  ],
    actors: [
    'Morgan Freeman',
      'Morgan Freeman'
  ],
    release: {
      date: '2025-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
  },
  runtime: 77,
  genre: [
    'Comedy',
    'Action',
    'Drama'
   ],
  description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic \'Nu, Pogodi!\' and \'Alice in Wonderland\', with the best fight scenes since Bruce Lee.'
},
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});





