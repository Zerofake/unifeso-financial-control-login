import logo from "./logo.svg";
import React, { Component } from 'react';
import "./css/main.css";
import Api from "./Api";
const api = new Api();

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    this.nomeChange = this.nomeChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.senhaChange = this.senhaChange.bind(this);
    this.realizarCadastro = this.realizarCadastro.bind(this);
  }
  nomeChange(event) {
    this.setState({nome: event.target.value})
  }
  emailChange(event) {
    this.setState({email: event.target.value});
  }
  senhaChange(event) {
    this.setState({senha: event.target.value});
  }
  async realizarCadastro() {
    if(this.state.nome && this.state.email && this.state.senha) {
      var retorno = await api.registrar(this.state.nome, this.state.email, this.state.senha);
      if(retorno.id) {
        alert(`
        Cadastro realizado com sucesso!\n
        Seja bem vindo ${retorno.nome}!
        `);
        //TODO: redirecionar para uma home
      }
      else {
        alert(retorno.erroMens);
      }
    }
    else {
      var msg = "Erro: É necessário preencher ";
      if(!this.state.nome) {
        msg += "o nome"
      }
      if(!this.state.email) {
          if(!this.state.nome) {
            msg += " e ";
          }
          msg += "o email"
      }
      if(!this.state.senha) {
        if(!this.state.email || !this.state.nome) {
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
          <input class="input" type="nome" placeholder="Nome"      value={this.state.nome} onChange={this.nomeChange}/>
          <input class="input" type="email" placeholder="Email"    value={this.state.email} onChange={this.emailChange}/>
          <input class="input" type="password" placeholder="Senha" value={this.state.senha} onChange={this.senhaChange}/>
          <button class="button button--success" type="submit" onClick={this.realizarCadastro}>
            Cadastrar
          </button>
          <a class="link" href="/login">
          Já possuo cadastro!
          </a>
        </div>
      </div>
    );
  }
}

export default Cadastro;
