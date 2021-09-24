import React from 'react';
import Home from "./Screens/Home";
import About from "./Screens/About";
import NavBar from "./Components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Landing = () => {
  return (
    <div style={styles.wrapper}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
        </Switch>
      </Router>
    </div>
  )
};

const styles = {
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