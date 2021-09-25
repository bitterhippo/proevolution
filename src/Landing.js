import React from 'react';
import Home from "./Screens/Home";
import About from "./Screens/About";
import NavBar from "./Components/NavBar/NavBar";
import BannerImg from './Components/ImgContainer/BannerImg';
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
        <BannerImg />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
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
  }
}

export default Landing;