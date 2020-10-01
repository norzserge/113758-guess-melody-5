import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const root = document.querySelector(`#root`);

const Settings = {
  ERRORS_COUNT: 3,
};

ReactDOM.render(<App errorsCount={Settings.ERRORS_COUNT} />, root);
