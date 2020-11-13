import React from "react";
import GenreQuestionItem from '../genre-question-item/genre-question-item';
import {genreScreenType} from './genre-screen-type';

const GenreScreen = (props) => {
  const {
    onAnswer,
    onChange,
    question,
    renderPlayer,
    children,
    userAnswers,
  } = props;

  const {
    answers,
    genre
  } = question;

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img
            className="game__logo"
            src="img/melody-logo-ginger.png"
            alt="Угадай мелодию"
          />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="timer"
          viewBox="0 0 780 780"
        >
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1); transform-origin: center`}}
          />
        </svg>
        {children}
      </header>
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >
          {
            answers.map((answer, i) => (
              <div key={`${i}-${answer.src}`} className="track">
                <GenreQuestionItem
                  answer={answer}
                  id={i}
                  key={`${i}-${answer.src}`}
                  onChange={onChange}
                  renderPlayer={renderPlayer}
                  userAnswer={userAnswers[i]}
                />
              </div>
            ))
          }
          <button className="game__submit button" type="submit">
            Ответить
          </button>
        </form>
      </section>
    </section>
  );
};

GenreScreen.propTypes = genreScreenType;

export default GenreScreen;
