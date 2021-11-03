import React from 'react';

//Screens
import StaffView from './Screens/StaffView';
import Services from './Screens/Services';
import FooterNav from "./Components/FooterNav/FootNav";
import Home from "./Screens/Home";
import About from "./Screens/About";
import FAQ from './Screens/FAQ';

//Components
import NavBar from "./Components/NavBar/NavBar";

//Router
import ReactDOM from 'react-dom';
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
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/about" component={About} />
          <Route exact path="/staffview" component={StaffView} />
        </Switch>
        <div style={styles.navWrapper}>
          <FooterNav />
        </div>
      </Router>
    </div>
  )
};

const styles = {
  wrapper: {
    paddingTop: 0,
    minHeight: '100vh',
    paddingBottom: '5vh'
  },
  navWrapper: {
    position: "absolute",
    width: "100%",
    height: "2.5rem"
  }
}

export default Landing;