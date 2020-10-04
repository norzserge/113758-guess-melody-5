import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignInScreen from "../login-screen/login-screen";
import GameOverScreen from "../lose-screen/lose-screen";
import ResultScreen from "../result-screen/result-screen";
import ArtistScreen from "../artist-screen/artist-screen";
import GenreScreen from "../genre-screen/genre-screen";

const App = (props) => {
  const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/result">
          <ResultScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
