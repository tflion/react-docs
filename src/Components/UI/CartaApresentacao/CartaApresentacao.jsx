import React from 'react';
import './CartaApresentacao.css'

const CartaApresentacao = (props) => {
     
    return (
        <section className="carta-apresentacao">
            <h2 className="titulo-doc">Carta de Apresentação</h2>
            <div className="folha">
                <p>Prezado(a) Senhor(a),</p>
                <p>Conforme a indicação de {props.dados.quemIndica}, envio meu currículo para apreciação.</p>
                <p>Há {props.dados.tempo} atuo na área de {props.dados.areaAtuacao} da empresa {props.dados.empresa},
                    realizando atividades de {props.dados.atividadesRealizadas}.</p>
                <p>Neste momento, busco novos desafios no mercado,
                    visando o desenvolvimento de um trabalho objetivo e gerador de resultados,
                    de forma a possibilitar o crescimento qualitativo e quantitativo para os envolvidos.</p>
                <p>Agradeço a atenção e coloco-me ao inteiro dispor para contato pessoal.</p>
                <p>{props.dados.nome}</p>
                <p>{props.dados.telefone}</p>
            </div>

        </section>

    );
}

export default CartaApresentacao;