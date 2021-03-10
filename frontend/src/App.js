import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Cadastro from "./components/cadastro.component"


class App extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/cadastro" className="navbar-brand">
            Cadastro de usuário
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/lista"} className="nav-link">
                Lista de usuários
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/cadastro"]} component={Cadastro} />
            {/* <Route exact path="/lista" component={lista} /> */}
          </Switch>
        </div>
      </div>
    );
  };
};

export default App;
