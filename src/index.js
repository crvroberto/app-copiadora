import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Home from './pages/home'
import Pdv from './pages/pdv'
import Pedidos from './pages/pedidos'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

ReactDOM.render(
 <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
        <Route path="/home" component={Home} />
        <Route path="/pdv" component={Pdv} />
        <Route path="/pedidos" component={Pedidos} />
    </Switch>
    </BrowserRouter>
  ,document.getElementById('root')
);



