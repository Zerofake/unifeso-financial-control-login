import logo from './logo.svg';
import './App.css';
import React from 'react';
/*  import Routes from './Routes';*/ /*         
import { Link} from 'react-router-dom';*/
/*  import Routes from './Routes';*/ /*         
/* import './index.js';        

<Routes />
*/


/* import a1 from './a1.jpg'; */



function App() {
  return (
   
   <div class="container " >


    <div className="container_login logo"  >
    
    
     <img  class="container logo" src={logo} alt='logo' />
     
    

     <input class="input" type="Email" />
     <br></br>
    <input  class='input'  type="password"/> 
      <form>
        <button class="tamanho" >
          Entrar
          </button>
      </form>
 <a   href="./Recuperarsenha">Recuperar senha</a><br></br>
<a href="Recuperarsenha.js">Registrar-se</a> 


    </div>
      </div>



  );
}

export default App;

