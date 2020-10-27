import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {GameType} from '../../const';
import ArtistScreen from '../artist-screen/artist-screen';
import GenreScreen from '../genre-screen/genre-screen';
import {gameScreenType} from './game-screen-type';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import Mistakes from '../mistakes/mistakes';

const GenreScreenHOC = withActivePlayer(GenreScreen);
const ArtistScreenHOC = withActivePlayer(ArtistScreen);

const GameScreen = (props) => {
  const {questions, step, onUserAnswer, resetGame, mistakes} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
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
