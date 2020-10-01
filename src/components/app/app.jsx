import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignIn from "../login/login";
import GameOver from "../lose/lose";
import Result from "../result/result";
import Artist from "../artist/artist";
import Genre from "../genre/genre";

const App = (props) => {
  const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route exact path="/lose">
          <GameOver />
        </Route>
        <Route exact path="/dev-artist">
          <Artist />
        </Route>
        <Route exact path="/dev-genre">
          <Genre />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
