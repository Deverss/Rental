import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'
import Navbar from './components/Navbar'
import HowItWorks from './pages/howitworks'
import FeaturesPage from './pages/features'
import Blog from './pages/blog'
import Test from './Test';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/howitworks" component={HowItWorks} exact />
        <Route path="/features" component={FeaturesPage} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/test" component={Test}/>
      </Switch>
    </Router>
  );
}

export default App;
