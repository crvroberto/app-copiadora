import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home'
import Pdv from './pages/pdv'
import Pedidos from './pages/pedidos'
import Edit from './pages/edit'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

ReactDOM.render(
 <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/pdv" component={Pdv}/>
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/edit" component={Edit} />
    </Switch>
    </BrowserRouter>
  ,document.getElementById('root')
);



