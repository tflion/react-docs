import { useState } from "react";
import CartaApresentacao from "../UI/CartaApresentacao/CartaApresentacao";
import Form from "../UI/Form/Form";

const DocsApp = () => {
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
        <>
            
            <Form onEnviarDadosDocumento={adicionarDadosHandler} />
            <CartaApresentacao dados={dadosUsuario} />
        </>
    );

}

export default DocsApp;