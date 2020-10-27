import PropTypes from 'prop-types';
import {artistScreenType} from '../artist-screen/artist-screen-type';
import {genreScreenType} from '../genre-screen/genre-screen-type';

export const gameScreenType = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistScreenType.question, genreScreenType.question]).isRequired
  ),
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};
