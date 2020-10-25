import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./page/Home";
import Post from "./page/IndividualPost";

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
        <Route exact path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
}


export default App;
