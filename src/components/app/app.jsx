import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignInScreen from '../login-screen/login-screen';
import GameOverScreen from '../lose-screen/lose-screen';
import ResultScreen from '../result-screen/result-screen';
import GameScreen from '../game-screen/game-screen';
import {MAX_MISTAKE_COUNT} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={({history}) => (
            <WelcomeScreen
              errorsCount={MAX_MISTAKE_COUNT}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path='/game'>
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
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

App.propTypes = {};

export default App;
