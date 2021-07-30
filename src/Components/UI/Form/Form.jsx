import { useRef, useState } from "react";

import ErroModal from '../ErroModal/ErroModal';
import "./Form.css"

const Form = (props) => {
    const nomeInputRef = useRef();
    const telefoneInputRef = useRef();
    const indicacaoInputRef = useRef();
    const tempoInputRef = useRef();
    const areaAtuacaoInputRef = useRef();
    const empresaInputRef = useRef();
    const atividadesRealizadasInputRef = useRef();

    const [erro, setErro] = useState();

    const enviarHandler = (event) => {
        event.preventDefault();
        //Pegando os valores dos inputs via Refs
        const nomeInserido = nomeInputRef.current.value;
        const telefoneInserido = telefoneInputRef.current.value;
        const indicacaoInserido = indicacaoInputRef.current.value;
        const tempoInserido = tempoInputRef.current.value;
        const areaInserido = areaAtuacaoInputRef.current.value;
        const empresaInserido = empresaInputRef.current.value;
        const atividadesInserido = atividadesRealizadasInputRef.current.value;

        //Verificando se há campos vazios nos inputs
        if (nomeInserido.trim().length === 0 ||
            telefoneInserido.trim().length === 0 ||
            indicacaoInserido.trim().length === 0 ||
            tempoInserido.trim().length === 0 ||
            areaInserido.trim().length === 0 ||
            empresaInserido.trim().length === 0 ||
            atividadesInserido.trim().length === 0) {
            setErro({
                titulo: 'Dados Incompletos',
                mensagem: 'Favor preencher os campos em branco (Sem campos vazios).',
            });

            return;
        }

        //Enviando dados via props para DocsApp
        props.onEnviarDadosDocumento(
            nomeInserido,
            telefoneInserido,
            indicacaoInserido,
            tempoInserido,
            areaInserido,
            empresaInserido,
            atividadesInserido);

        limparInputAposEnvio();

    }

    const limparInputAposEnvio = () => {
        nomeInputRef.current.value = '';
        telefoneInputRef.current.value = '';
        atividadesRealizadasInputRef.current.value = '';
        empresaInputRef.current.value = '';
        areaAtuacaoInputRef.current.value = '';
        indicacaoInputRef.current.value = '';
        tempoInputRef.current.value = '';
    }

    const erroHandler = () => {
        setErro(null);
    }

    return (
        //Se erro for true o modal Aparece com as strings informadas acima
        <>
            {erro && <ErroModal titulo={erro.titulo} conteudo={erro.mensagem} onConfirm={erroHandler} />}
            <section className="formulario">
                <div className="form-content">
                    <form onSubmit={enviarHandler}>
                        <div className="form-wrapper w100 title">
                            <h3>Preencha suas informações abaixo:</h3>
                        </div>
                        <div className="form-wrapper w50">
                            <span>Seu nome nompleto:</span>
                            <input type="text"
                                ref={nomeInputRef} />
                        </div>
                        <div className="form-wrapper w50">
                            <span>Seu telefone:</span>
                            <input type="text"
                                ref={telefoneInputRef} />
                        </div>
                        <div className="form-wrapper w100">
                            <span>Quem indicou:</span>
                            <input type="text"
                                ref={indicacaoInputRef} />
                        </div>
                        <div className="form-wrapper w50">
                            <span>Tempo de atuação:</span>
                            <input type="text"
                                ref={tempoInputRef} />
                        </div>
                        <div className="form-wrapper w50">
                            <span>Área de atuação:</span>
                            <input type="text"
                                ref={areaAtuacaoInputRef} />
                        </div>
                        <div className="form-wrapper w100">
                            <span>Última empresa: </span>
                            <input type="text"
                                ref={empresaInputRef} />
                        </div>
                        <div className="form-wrapper w100">
                            <span>Atividades Realizadas: </span>
                            <textarea
                                ref={atividadesRealizadasInputRef}></textarea>
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
        </>
    );
}

export default Form;