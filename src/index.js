import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home'
import Pdv from './pages/pdv'
import Pedidos from './pages/pedidos'
import Edit from './pages/edit'
import EditPedidos from './pages/editPedidos'
import Clients from './pages/Clients/index'
import Funcionario from './pages/funcionarios/index'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { AuthProvider } from './providers/auth'

ReactDOM.render(
  <AuthProvider>
 <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/pdv" component={Pdv}/>
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/edit" component={Edit} />
        <Route path="/editPedidos" component={EditPedidos} />
        <Route path="/clients" component={Clients}></Route>
        <Route path="/funcionarios" component={Funcionario}></Route>

        
    </Switch>
    </BrowserRouter>
   </AuthProvider>
  ,document.getElementById('root')
);



