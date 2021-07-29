import { useState } from 'react';
import './App.css';
import CartaApresentacao from './Components/CartaApresentacao/CartaApresentacao';
import Form from './Components/Form/Form';

const App = () => {
  const [dadosUsuario, setDadosUsuario] = useState(
    {
      nome: '(SEU NOME COMPLETO)',
      telefone: '(SEU TELEFONE)',
      quemIndica: '(QUEM INDICOU)',
      tempo: '(TEMPO)',
      areaAtuacao: '(ÁREA DE ATUAÇÃO)',
      empresa: ' (ÚLTIMA EMPRESA)',
      atividadesRealizadas: '(ATIVIDADES REALIZADAS)'
    }
  );

  const adicionarDadosHandler = (nomeUsuario, telefoneUsuario, indicacao, tempoAtuacao, area, empresaAtuacao, atividades) => {
    setDadosUsuario(
      {
        nome: nomeUsuario,
        telefone: telefoneUsuario,
        quemIndica: indicacao,
        tempo: tempoAtuacao,
        areaAtuacao: area,
        empresa: empresaAtuacao,
        atividadesRealizadas: atividades
      }
    );
  }

  return (
    <div className="App">
      <Form onEnviarDadosDocumento={adicionarDadosHandler} />
      <CartaApresentacao dados={dadosUsuario} />
    </div>
  );
}
export default App;
