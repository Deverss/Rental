import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
// import Navbar from './components/Navbar'
import HowItWorks from './pages/howitworks'
import FeaturesPage from './pages/features'
import Blog from './pages/blog'
import BlogPost from './pages/blogpost'
import PropertyDetail from './pages/propertydetail'
import AdvancedSearch from './pages/advancedsearch'
import Profile from './pages/profile' 
import Contact from './pages/contact'
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute'
import Category from './pages/category'
import AccountSetting from './pages/accountsetting'
import Test from './Test';
import AddPost from './components/AddPost';
import AddBlog from './components/AddBlog';
import NewPost from './pages/newpost'

function App() {
  return(
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <PublicRoute path="/signin" component={SignIn} exact />
        <PublicRoute path="/signup" component={SignUp} exact />
        <Route path="/howitworks" component={HowItWorks} exact />
        <Route path="/features" component={FeaturesPage} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blogpost" component={BlogPost} exact />
        <Route path="/blog/:id" component={BlogPost} exact />
        <Route path="/propertydetail" component={PropertyDetail} exact />  
        <Route path="/advancedsearch" component={AdvancedSearch} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/category" component={Category} exact />
        <Route path="/test" component={Test}/>
        <Route path="/property/:id" component={PropertyDetail} exact /> {/* test api */}
        <Route path='/addblog' component={AddBlog}/>
        <Route path='/addpost' component={AddPost}/>
        <Route path="/accountsetting" component={AccountSetting}/>
        <Route path="/newpost" component={NewPost}/>
      </Switch>
    </Router>
  );
}

export default App;
