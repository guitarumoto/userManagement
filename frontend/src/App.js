import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Cadastro from "./components/cadastro.component"
import Lista from "./components/lista.component"
import Usuario from "./components/usuario.component"


class App extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/cadastrar" className="navbar-brand">
            Cadastro de usuário
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/usuarios"} className="nav-link">
                Lista de usuários
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/usuarios" component={Lista} />
            <Route exact path={["/", "/cadastrar"]} component={Cadastro} />
            <Route exact path="/usuarios/:id" component={Usuario} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default App;
