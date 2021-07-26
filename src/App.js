import { useState } from 'react';
import './App.css';
import CartaApresentacao from './Components/CartaApresentacao/CartaApresentacao';
import Form from './Components/Form/Form';

const App = () => {
  const [ nomeUsuario , setInformacoes] = useState('');

  //const addDadosNoDocumento = data => setTeste(data);

  return (
    <div className="App">
      <Form onEnviarDadosDocumento={data => setInformacoes(data)} />
      <CartaApresentacao teste={nomeUsuario} />
    </div>
  );
}
export default App;
