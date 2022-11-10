import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
