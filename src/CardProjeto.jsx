import { useState } from 'react';

function CardProjeto({ titulo1, descricao1, titulo2, descricao2, selecionado, onAlternarSelecao }) {

    return (
        <>
            <article>
                <h1>{titulo1}</h1>
                <p>{descricao1}</p>
            </article>
            <article>
                <h1>{titulo2}</h1>
                <p>{descricao2}</p>
            </article>

            {selecionado && <p>Projeto selecionado</p>}

            <button onClick={onAlternarSelecao}>{selecionado ? 'Remover seleção' : 'Selecionar'}</button>
        </>
    );
}

export default CardProjeto