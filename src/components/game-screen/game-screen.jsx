import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import ArtistScreen from '../artist-screen/artist-screen';
import GenreScreen from '../genre-screen/genre-screen';
import {gameScreenType} from './gameScreenType';

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState + 1,
              }));
            }}
          />
        );
      case GameType.GENRE:
        return (
          <GenreScreen
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState + 1,
              }));
            }}
          />
        );
    }
    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = gameScreenType;

export default GameScreen;
