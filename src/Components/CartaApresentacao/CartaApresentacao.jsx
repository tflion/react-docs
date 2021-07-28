import React from 'react';
import './CartaApresentacao.css'

const CartaApresentacao = (props) => {
     
    return (
        <section className="carta-apresentacao">
            <h2 className="titulo-doc">Carta de Apresentação</h2>
            <div className="folha">
                <p>Prezado(a) Senhor(a),</p>
                <p>Conforme a indicação de ( NOME DE QUEM INDICOU ), envio meu currículo para apreciação.</p>
                <p>Há ( TEMPO ) atuo na área de (ÁREA ATUANTE) da empresa ( NOME DA EMPRESA ),
                    realizando atividades de ( ATIVIDADES REALIZADAS ).</p>
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