import React, { Component } from "react";
import UsuarioDataService from "../services/usuario.service";

export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeData_Nascimento = this.onChangeData_Nascimento.bind(this);
    this.onChangeFoto = this.onChangeFoto.bind(this);
    this.getUsuario = this.getUsuario.bind(this);
    this.updateUsuario = this.updateUsuario.bind(this);
    this.deleteUsuario = this.deleteUsuario.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getUsuario(this.props.match.params.id);
  }

  onChangeNome(e) {
    const nome = e.target.value;

    this.setState(function(prevState) {
      return {
        currentUsuario: {
          ...prevState.currentUsuario,
          nome: nome
        }
      };
    });
  }

  onChangeData_Nascimento(e) {
    const data_nascimento = e.target.value;
    
    this.setState(prevState => ({
      currentUsuario: {
        ...prevState.currentUsuario,
        data_nascimento: data_nascimento
      }
    }));
  }

  onChangeFoto(e) {
    const foto = e.target.value;
    
    this.setState(prevState => ({
      currentUsuario: {
        ...prevState.currentUsuario,
        foto: foto
      }
    }));
  }

  getUsuario(id) {
    UsuarioDataService.get(id)
      .then(response => {
        this.setState({
          currentUsuario: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateUsuario() {
    UsuarioDataService.update(
      this.state.currentUsuario.id,
      this.state.currentUsuario
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "O usuário foi atualizado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteUsuario() {    
    UsuarioDataService.delete(this.state.currentUsuario.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/usuarios')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUsuario } = this.state;

    return (
      <div>
        {currentUsuario ? (
          <div className="edit-form">
            <h4>Usuário</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  value={currentUsuario.nome}
                  onChange={this.onChangeNome}
                />
              </div>
              <div className="form-group">
                <label htmlFor="data_nascimento">Data de Nascimento</label>
                <input
                  type="date"
                  className="form-control"
                  id="data_nascimento"
                  value={currentUsuario.data_nascimento}
                  onChange={this.onChangeData_Nascimento}
                />
              </div>
              <div className="form-group">
                <label htmlFor="foto">Foto</label>
                <input
                  type="text"
                  className="form-control"
                  id="foto"
                  value={currentUsuario.foto}
                  onChange={this.onChangeFoto}
                />
                </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUsuario}
            >
              Deletar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUsuario}
            >
              Atualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Selecione um usuário</p>
          </div>
        )}
    </div>
    );
  }
}
