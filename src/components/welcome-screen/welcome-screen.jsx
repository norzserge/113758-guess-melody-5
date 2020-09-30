import React from "react";
import PropTypes from "prop-types";

const WelcomeScreen = (props) => {
  const {errorsCount} = props;
  return <h1>{errorsCount}</h1>;
};

WelcomeScreen.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default WelcomeScreen;
