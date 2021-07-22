import "./Form.css"

const Form = () => {
    return (
        <section className="formulario">
            <div className="form-content">
                <form>
                    <div className="form-wrapper w50">
                        <span>Seu nome nompleto:</span>
                        <input type="text" />
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
                        <input type="submit" value="Preencher Formulário" />
                    </div>

                </form>
                <div className="clear"></div>
            </div>
        </section>
    );
}

export default Form;