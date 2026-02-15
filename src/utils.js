import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration);

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomPositiveInteger = (a, b = 1) => {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть число');
  }

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloatNumber = (a, b, digits = 1) => {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть число');
  }

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}


// Функция возвращающая случайный элемент из массива
const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];


const humaniseFilmDate = (date, format) => dayjs(date).format(format);
const humanizeFilmDuration = (duration) => {
   const totalMinutes =  dayjs.duration(duration, 'minutes');
   const hours = totalMinutes.get('hours');
   const minutes = totalMinutes.get('minutes');

   return `${hours}h ${minutes}m`;

}


export { getRandomPositiveInteger, getRandomFloatNumber, getRandomArrayElement, humaniseFilmDate, humanizeFilmDuration };
