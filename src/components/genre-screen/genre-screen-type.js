import PropTypes from "prop-types";
import {GameType} from "../../const";

export const genreScreenType = {
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.string,
    })).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
