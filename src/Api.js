
import Axios from "axios";

const api = Axios.create({baseURL: 'http://localhost:8090/'});

/*
var Api;
const conect = Axios.create({baseURL: 'http://localhost:8090/'});

Api = async function logar(email, senha) {
    var retorno;
    await this.state.api.post(
        'users/login',
        JSON.stringify({username: email, password: senha}),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then( response => {
      retorno = {
        id: response.data.id,
        nome: response.data.nome,
        username: response.data.username,
        password: response.data.password,
        createdAt: response.data.createdAt,
      };
    })
    .catch(error => {
      return {id: undefined, nome: error};
    });
    alert(retorno);
    return retorno;
    return {id: undefined, nome: "seila vei"};
}
*/
class Api {
    constructor() {
        this.state = {
            api: Axios.create({baseURL: 'http://localhost:8090/'})
        }
        //this.logar = this.logar.bind(this);
    }

    async logar(email, senha) {
        var retorno;
        await api.post(
            'users/login',
            JSON.stringify({username: email, password: senha}),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then( response => {
          retorno = {
            id: response.data.id,
            nome: response.data.nome,
            username: response.data.username,
            password: response.data.password,
            createdAt: response.data.createdAt,
          };
        })
        .catch(error => {
          retorno = {id: undefined, erroMens: "Email ou senha incorretos.", error: error};
        });
        if(!retorno) {
            retorno = {id: undefined, erroMens: "Não foi possivel se conectar ao servidor."}
        }

        return retorno;
    }

    async registrar(nome, email, senha) {
      var retorno;
      await api.post(
        'users/singin',
        JSON.stringify({nome: nome, username: email, password: senha}),
        {
            headers: { 'Content-Type': 'application/json' }
        }
      )
      .then( response => {
        retorno = {
          id: response.data.id,
          nome: response.data.nome,
          username: response.data.username,
          password: response.data.password,
          createdAt: response.data.createdAt,
        };
      })
      .catch(error => {
        //TODO: tratar os possiveis erros que posso receber mas deixamos assim
        retorno = {id: undefined, erroMens: "Ops alguma coisa deu errado.", error: error};
      });
      
      return retorno;
    }

    async trocarSenha(email, senha) {
      //o idieal seria eu fazer isso de outra forma mas deixamos para depois
      var retorno;
      await api.put(
        'users/update_password',
        JSON.stringify({username: email, password: senha}),
        {
            headers: { 'Content-Type': 'application/json' }
        }
      )
      .then( response => {
        retorno = {
          id: response.data.id,
          nome: response.data.nome,
          username: response.data.username,
          password: response.data.password,
          createdAt: response.data.createdAt,
        };
      })
      .catch(error => {
        retorno = {id: undefined, erroMens: "Email invalido!", error: error};
      });
      
      return retorno;
    }
}
export default Api;