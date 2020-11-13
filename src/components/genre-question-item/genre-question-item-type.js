import PropTypes from "prop-types";

export const genreQuestionItemType = {
  onChange: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswer: PropTypes.bool.isRequired,
};
