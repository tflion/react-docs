
import { useState } from "react";
import "./Form.css"

const Form = (props) => {
    const [nomeUsuarioInserido, setNomeUsuarioInserido] = useState('');

    const trocarNomeUsuarioHandler = (event) => {
        setNomeUsuarioInserido(event.target.value);
    };

    const enviarHandler = (event) => {
        event.preventDefault();

        /*const dadosDocumento = {
            nomeUsuario: nomeUsuarioInserido
        }*/

        const dadosDocumento = nomeUsuarioInserido;

        props.onEnviarDadosDocumento(dadosDocumento);
        setNomeUsuarioInserido('');
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
                            value={nomeUsuarioInserido}
                            onChange={trocarNomeUsuarioHandler} />
                    </div>
                    <div className="form-wrapper w50">
                        <span>Seu telefone:</span>
                        <input type="text" />
                    </div>
                    <div className="form-wrapper w100">
                        <span>Quem indicou:</span>
                        <input type="text" />
                    </div>
                    <div className="form-wrapper w50">
                        <span>Tempo de atuação:</span>
                        <input type="text" />
                    </div>
                    <div className="form-wrapper w50">
                        <span>Área de atuação:</span>
                        <input type="text" />
                    </div>
                    <div className="form-wrapper w100">
                        <span>Última empresa: </span>
                        <input type="text" />
                    </div>
                    <div className="form-wrapper w100">
                        <span>Atividades Realizadas: </span>
                        <textarea></textarea>
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