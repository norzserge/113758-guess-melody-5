import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {GameType, MAX_MISTAKE_COUNT} from '../../const';
import ArtistScreen from '../artist-screen/artist-screen';
import GenreScreen from '../genre-screen/genre-screen';
import {gameScreenType} from './game-screen-type';
import Mistakes from '../mistakes/mistakes';

import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer';

const GenreScreenHOC = withActivePlayer(withUserAnswer(GenreScreen));
const ArtistScreenHOC = withActivePlayer(ArtistScreen);

const GameScreen = (props) => {
  const {questions, step, onUserAnswer, mistakes} = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to="/lose" />
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to="/result" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistScreenHOC
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </ArtistScreenHOC>
      );
    case GameType.GENRE:
      return (
        <GenreScreenHOC
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </GenreScreenHOC>
      );
  }
  return <Redirect to="/" />;
};

GameScreen.propTypes = gameScreenType;

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
});

export {GameScreen};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
