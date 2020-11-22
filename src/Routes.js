import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import novasenha from './Recuperarsenha';



function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path ="/" componente={App} ></Route>
            <Route path ="/Recuperarsenha" componente={novasenha} ></Route>

        </Switch>
        
        </BrowserRouter>


    )


}

export default Route;