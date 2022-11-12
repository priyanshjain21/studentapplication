import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ScoreBoard from "./ScoreBoard";
import TestScreen from "./TestScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/testScreen" component={TestScreen} />
          <Route exact path="/scoreBoard" component={ScoreBoard} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
