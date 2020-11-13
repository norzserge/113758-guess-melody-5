import React, {PureComponent} from 'react';
import {genreQuestionItemType} from './genre-question-item-type';

class GenreQuestionItem extends PureComponent {
  render() {
    const {
      answer,
      id,
      onChange,
      renderPlayer,
      userAnswer,
    } = this.props;

    return (
      <div className="track">
        {renderPlayer(answer.src, id)}
        <div className="game__answer">
          <input
            className="game__input visually-hidden"
            type="checkbox"
            name="answer"
            value={`answer-${id}`}
            id={`answer-${id}`}
            сhecked={userAnswer.toString()}
            onChange={(evt) => {
              const value = evt.target.checked;

              onChange(id, value);
            }}
          />
          <label className="game__check" htmlFor={`answer-${id}`}>
            Отметить
          </label>
        </div>
      </div>
    );
  }
}

GenreQuestionItem.propTypes = genreQuestionItemType;

export default GenreQuestionItem;
