import React, { Component } from "react";
import UsuarioDataService from "../services/usuario.service";

export default class CadastrarUsuario extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeData_nascimento = this.onChangeData_nascimento.bind(this);
    this.onChangeFoto = this.onChangeFoto.bind(this);
    this.saveUsuario = this.saveUsuario.bind(this);
    this.novoUsuario = this.novoUsuario.bind(this);

    this.state = {
      id: null,
      nome: "",
      data_nascimento: "", 
      foto: "",

      submitted: false
    };
  }


  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeData_nascimento(e) {
    this.setState({
      data_nascimento: e.target.value
    });
  }

  onChangeFoto(e) {
    this.setState({
      foto: e.target.value
    });
  }

  saveUsuario () {
    var data = {
      nome: this.state.nome,
      data_nascimento: this.state.data_nascimento,
      foto: this.state.foto,
    };

    UsuarioDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          data_nascimento: response.data.data_nascimento,
          foto: response.data.foto,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  novoUsuario() {
    this.setState({
      id: null,
      nome: "",
      data_nascimento: "",
      foto: "",

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>Usuário cadastrado com sucesso!</h4>
              <button className="btn btn-success" onClick={this.novoUsuario}>
                Cadastrar
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  required
                  value={this.state.nome}
                  onChange={this.onChangeNome}
                  name="nome"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="data_nascimento">Data Nascimento</label>
                <input
                  type="date"
                  className="form-control"
                  id="data_nascimento"
                  required
                  value={this.state.data_nascimento}
                  onChange={this.onChangeData_nascimento}
                  name="data_nascimento"
                />
              </div>

              <div className="form-group">
                <label htmlFor="foto">Foto</label>
                <input
                  type="text"
                  className="form-control"
                  id="foto"
                  required
                  value={this.state.foto}
                  onChange={this.onChangeFoto}
                  name="foto"
                />
              </div>
  
              <button onClick={this.saveUsuario} className="btn btn-success">
                Cadastrar
              </button>
            </div>
          )}
        </div>
      );
  }
}