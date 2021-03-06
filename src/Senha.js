import logo from "./logo.svg";
import React, { Component } from 'react';
import "./css/main.css";
import Api from "./Api";
const api = new Api();

class Senha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.senhaChange = this.senhaChange.bind(this);
    this.atualizarSenha = this.atualizarSenha.bind(this);
  }
  emailChange(event) {
    this.setState({email: event.target.value});
  }
  senhaChange(event) {
    this.setState({senha: event.target.value});
  }
  async atualizarSenha() {
    if(this.state.email && this.state.senha) {
      var retorno = await api.trocarSenha(this.state.email, this.state.senha);
      if(retorno.id) {
        alert(`
        Senha atualizada com sucesso!
        `);
        //TODO: redirecionar para a pagina de login
      }
      else {
        alert(retorno.error);
        //TODO: seila, talvez so tratar os erros pra identificar se o servidor foi de base, ou se a senha ta errada mesmo
      }
    }
    else {
      var msg = "Erro: É necessário preencher ";
      if(!this.state.email) {
          msg += "o email"
      }
      if(!this.state.senha) {
        if(!this.state.email) {
          msg += " e ";
        }
        msg += "a senha."
      }
      else {
        msg+= "."
      }
      alert(msg);
    }
  }
  
  render() {
    return (
      <div class="container">
        <div className="container__login">
          <img class="logo" src={logo} alt="Logo" />
          <input class="input" type="email" placeholder="Email" value={this.state.email} onChange={this.emailChange}/>
          <input class="input" type="password" placeholder="Nova senha" value={this.state.senha} onChange={this.senhaChange}/>
          <button class="button button--success" type="submit" onClick={this.atualizarSenha}>
            Alterar senha
          </button>
          <a class="link" href="/login">
          Retornar ao login.
          </a>
        </div>
      </div>
    );
  }
}

export default Senha;
