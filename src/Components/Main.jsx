import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Directory from "./Directory";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/directory" component={Directory} />
    </Switch>
  );
};

export default Main;
