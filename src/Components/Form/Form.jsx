import "./Form.css"

const Form = () =>{
    return(
        <form className="form">
            <span>Seu nome:</span>
            <input type="text" placeholder="Informe seu nome completo..."/>
            <span>Seu telefone:</span>
            <input type="text" placeholder="Seu telefone para contato..."/>
            <span>Quem indicou:</span>
            <input type="text" placeholder="Informe quem indicou..." />
            <span>Tempo de atuação:</span>
            <input type="text" placeholder="Seu tempo de atuação..." />
            <span>Última empresa:</span>
            <input type="text" placeholder="Sua última empresa..." />
            <span>Atividades realizadas:</span>
            <textarea placeholder="Atividades realizas..."></textarea>
        </form>
    );
}

export default Form;