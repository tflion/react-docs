
import { useState } from "react";
import "./Form.css"

const Form = (props) => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');
    const [quemIndicou, setQuemIndicou] = useState('');
    const [tempo, setTempo] = useState('');
    const [areaAtuacao, setAreaAtuacao] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [atividadesRealizadas, setAtividadesRealizadas] = useState('');

    const trocarNomeUsuarioHandler = (event) => {
        setNomeUsuario(event.target.value);
    };
    const trocarTelefoneUsuarioHandler = (event) => {
        setTelefoneUsuario(event.target.value);
    };
    const trocarQuemIndicouHandler = (event) => {
        setQuemIndicou(event.target.value);
    };
    const trocarTempoHandler = (event) => {
        setTempo(event.target.value);
    };
    const trocarAreaAtuacaoHanddler = (event) => {
        setAreaAtuacao(event.target.value);
    };
    const trocarEmpresaHandler = (event) => {
        setEmpresa(event.target.value);
    };
    const trocarAtividadesRealizadasHandler = (event) => {
        setAtividadesRealizadas(event.target.value);
    };


    const enviarHandler = (event) => {
        event.preventDefault();



        props.onEnviarDadosDocumento(nomeUsuario, telefoneUsuario);
        setTelefoneUsuario('');
        setNomeUsuario('');
    }

    return (
        <section className="formulario">
            <div className="form-content">
                <form onSubmit={enviarHandler}>
                    <div className="form-wrapper w100 title">
                        <h3>Preencha suas informações abaixo:</h3>
                    </div>
                    <div className="form-wrapper w50">
                        <span>Seu nome nompleto:</span>
                        <input type="text"
                            value={nomeUsuario}
                            onChange={trocarNomeUsuarioHandler} />
                    </div>
                    <div className="form-wrapper w50">
                        <span>Seu telefone:</span>
                        <input type="text"
                            value={telefoneUsuario}
                            onChange={trocarTelefoneUsuarioHandler} />
                    </div>
                    <div className="form-wrapper w100">
                        <span>Quem indicou:</span>
                        <input type="text"
                            onChange={trocarQuemIndicouHandler}
                            value={quemIndicou} />
                    </div>
                    <div className="form-wrapper w50">
                        <span>Tempo de atuação:</span>
                        <input type="text"
                            onChange={trocarTempoHandler}
                            value={tempo} />
                    </div>
                    <div className="form-wrapper w50">
                        <span>Área de atuação:</span>
                        <input type="text"
                            onChange={trocarAreaAtuacaoHanddler}
                            value={areaAtuacao} />
                    </div>
                    <div className="form-wrapper w100">
                        <span>Última empresa: </span>
                        <input type="text"
                            onChange={trocarEmpresaHandler}
                            value={empresa} />
                    </div>
                    <div className="form-wrapper w100">
                        <span>Atividades Realizadas: </span>
                        <textarea
                            onChange={trocarAtividadesRealizadasHandler}
                            value={atividadesRealizadas}></textarea>
                    </div>
                    <div className="form-wrapper w100">
                        <input type="submit"
                            value="Preencher Formulário"
                        />
                    </div>

                </form>
                <div className="clear"></div>
            </div>
        </section>
    );
}

export default Form;