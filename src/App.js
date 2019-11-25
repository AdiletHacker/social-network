import React, { useEffect }  from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Store from "./components/Content/Store/Store";
import Basket from "./components/Content/Basket/Basket";
import {connect} from "react-redux";
import Login from "./components/Content/Login/Login";
import {getLogin, getProfile} from "./Store/auth";
import PersonalAcc from "./components/Content/PersonalAcc/PersonalAcc";
import Users from "./components/Content/Users/Users";
import Selected from "./components/Content/Selected/Selected";
import Friends from "./components/Content/Friends/Friends";
import {getProducts} from "./Store/store";

let App = (props) => {

  useEffect(() => {
    props.getProducts();
    props.getLogin();
    props.getProfile();
  }, [props]);

  return <div className='mainApp'>
    <Header/>
    <Navbar/>
    <div className='content'>
      <Switch>
        <Route path='/' exact={true} component={ props.isAuth ? PersonalAcc : Login} />
        <Route path='/store' component={Store} />
        <Route path='/basket' component={Basket} />
        <Route path='/login' component={Login} />
        <Route path='/main-info' component={PersonalAcc} />
        <Route path='/users' component={Users} />
        <Route path='/selected' component={Selected} />
        <Route path='/friends' component={Friends} />
        <Redirect from="/*" to="/" />
      </Switch>
    </div>
    <Footer />

  </div>
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getLogin, getProfile, getProducts})(App);
