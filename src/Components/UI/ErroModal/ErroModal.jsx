import './ErroModal.css';

const ErroModal = (props) =>{
    return(
        <>
            <div className="backdrop" onClick={props.onConfirm}></div>
            <div className="modal">
                <header className="header">
                    <h2>{props.titulo}</h2>
                </header>
                <div className="conteudo">
                    <p>{props.conteudo}</p>
                </div>
                <footer className="footer">
                    <button onClick={props.onConfirm}>👍🏽</button>
                </footer>
            </div>
        </>
    );
}

export default ErroModal;