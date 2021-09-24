import React from 'react';
import Home from "./Screens/Home";
import About from "./Screens/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Landing = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Noah's Portfolio</h1>
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
        </Switch>
      </Router>
    </div>
  )
};

const styles = {
  title: {
    paddingTop: '5vh',
    textAlign: 'center'
  },
  wrapper: {
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.9,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 0,
    minHeight: '100vh',
    paddingBottom: '5vh'
  }
}

export default Landing;