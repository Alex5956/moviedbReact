import './App.css';
import React from "react";
import Movies from './components/movies/Movies';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

  return (
    <Router>
        <header><h1>Movies</h1></header>

        <Switch>
            <Route path='/' exact>
                <Movies />
            </Route>
            <Route path='/pages/:idPage' exact>
                <Movies />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
