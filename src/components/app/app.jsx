import React from 'react';
import {appType} from './appType';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignInScreen from '../login-screen/login-screen';
import GameOverScreen from '../lose-screen/lose-screen';
import ResultScreen from '../result-screen/result-screen';
import GameScreen from '../game-screen/game-screen';

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={({history}) => (
            <WelcomeScreen
              errorsCount={errorsCount}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path='/game'>
          <GameScreen
            questions={questions}
            errorsCount={errorsCount}
          />
        </Route>
        <Route exact path='/login'>
          <SignInScreen />
        </Route>
        <Route exact path='/result'>
          <ResultScreen />
        </Route>
        <Route exact path='/lose'>
          <GameOverScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appType;

export default App;
