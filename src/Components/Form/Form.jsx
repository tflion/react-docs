
import { useState } from "react";
import "./Form.css"

const Form = (props) => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');

    const trocarNomeUsuarioHandler = (event) => {
        setNomeUsuario(event.target.value);
    };

    const trocarTelefoneUsuarioHandler = (event) => {
        setTelefoneUsuario(event.target.value);
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