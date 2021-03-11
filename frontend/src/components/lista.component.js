import React, { Component } from "react";
import UsuarioDataService from "../services/usuario.service";
import { Link } from "react-router-dom";

export default class UsuariosList extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsuarios = this.retrieveUsuarios.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUsuario = this.setActiveUsuario.bind(this);

    this.state = {
      usuarios: [],
      currentUsuario: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveUsuarios();
  }

  retrieveUsuarios() {
    UsuarioDataService.getAll()
      .then(response => {
        this.setState({
          usuarios: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsuarios();
    this.setState({
      currentUsuario: null,
      currentIndex: -1
    });
  }

  setActiveUsuario(usuario, index) {
    this.setState({
      currentUsuario: usuario,
      currentIndex: index
    });
  }

  render() {
    const { usuarios, currentUsuario, currentIndex } = this.state;
    
    return (
        <div className="list row">
          <div className="col-md-6">
            <h4>Usuáros Cadastrados</h4>
  
            <ul className="list-group">
              {usuarios &&
                usuarios.map((usuario, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveUsuario(usuario, index)}
                    key={index}
                  >
                    {usuario.nome}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-md-6">
            {currentUsuario ? (
              <div>
                <h4>Usuário</h4>
                <div>
                  <label>
                    <strong>Código</strong>
                  </label>{" "}
                  {currentUsuario.id}
                </div>
                <div>
                  <label>
                    <strong>Nome: </strong>
                  </label>{" "}
                  {currentUsuario.nome}
                </div>
                <div>
                  <label>
                    <strong>Data de Nascimento</strong>
                  </label>{" "}
                  {currentUsuario.data_nascimento}
                </div>
                <div>
                  <label>
                    <strong>Foto</strong>
                  </label>{" "}
                  {currentUsuario.foto}
                </div>
                <Link
                  to={"/usuarios/" + currentUsuario.id}
                  className="badge badge-warning"
                >
                  Editar
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Selecione um Usuário</p>
              </div>
            )}
          </div>
        </div>
      );
  }
}