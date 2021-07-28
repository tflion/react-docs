import { useState } from 'react';
import './App.css';
import CartaApresentacao from './Components/CartaApresentacao/CartaApresentacao';
import Form from './Components/Form/Form';

const App = () => {
  const [dadosUsuario, setDadosUsuario] = useState(
    {
      nome: '( SEU NOME COMPLETO )',
      telefone: '( SEU TELEFONE )',
    }
  );

  const adicionarDadosHandler = (nomeUsuario, telefoneUsuario) => {
    setDadosUsuario({ nome: nomeUsuario, telefone: telefoneUsuario });
  }

  return (
    <div className="App">
      <Form onEnviarDadosDocumento={adicionarDadosHandler} />
      <CartaApresentacao dados={dadosUsuario} />
    </div>
  );
}
export default App;
