import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppMessage from "./App-message";
import Pages from "./Pages";
import CovidText from "./CovidText";
import Stopwatch from './Stopwatch';
import Watch from './Watch';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Switch>
              <Route path="/" exact>
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </Route>

              <Route path="/page" exact>
                <div className="app__body">
                  <Sidebar />
                  <Pages />
                  <Widgets />
                </div>
              </Route>
              <Route path="/message">
                <div className="app__body">
                  <Sidebar />
                  <AppMessage />
                  <Widgets />
                </div>
              </Route>
              <Route path="/watch">
                <div className="app__body">
                  <Sidebar />
                  <Watch />
                  <Widgets />
                </div>
              </Route>
              <Route path="/covid-19">
                <div className="app__body">
                  <Sidebar />
                  <CovidText />
                  <Widgets />
                </div>
              </Route>
             
              <Route path="/stopwatch">
                <div className="app__body">
                  <Sidebar />
                  <Stopwatch/>
                  <Widgets />
                </div>
              </Route>
            </Switch>
          </>
        )}
        ;
       
      </div>
    </Router>
  );
}

export default App;
