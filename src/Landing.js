import React from 'react';
import Home from "./Screens/Home";
import About from "./Screens/About";
import NavBar from "./Components/NavBar/NavBar";
import StaffView from './Screens/StaffView';
import FooterNav from "./Components/FooterNav/FootNav";
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
            <Route exact component={About} path="/About" />
            <Route exact component={StaffView} path="/staffView" />
          </Switch>
        <FooterNav />
      </Router>
    </div>
  )
};

const styles = {
  wrapper: {
    width: '100%',
    paddingTop: 0,
    minHeight: '100vh',
    paddingBottom: '5vh'
  },
}

export default Landing;