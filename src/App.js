import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import main from './main'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
