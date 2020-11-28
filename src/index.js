import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Route,Switch,BrowserRouter,Redirect} from "react-router-dom";
//import Home from './Home';
import Login from './Login';
import Senha from './Senha';
import Cadastro from './Cadastro';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/senha" component={Senha} />
        <Route path="/cadastro" component={Cadastro} />
        
        <Redirect path="/" to="/login"/>
      </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
