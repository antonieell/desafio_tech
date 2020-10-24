import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./page/Home";

function App() {
  useEffect(() => {
    (async () => {
      console.log("useEffect");
    })();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}


export default App;
