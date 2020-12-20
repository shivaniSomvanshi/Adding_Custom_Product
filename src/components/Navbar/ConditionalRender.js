import React from "react";
import LoggedIn from "./LoggedIn/LoggedIn";
import LoggedOut from "./LoggedOut/LoggedOut";

const ConditionalRender = (props) => {
  let logStatus = localStorage.getItem("logStatus");
  if (logStatus === null) {
    return <LoggedOut />;
  }

  return <LoggedIn />;
};

export default ConditionalRender;
