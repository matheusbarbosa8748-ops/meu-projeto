function CardProjeto(props) {
    return (
        <article>
            <h2>{props.titulo1}</h2>
            <p>{props.descricao1}</p>
        </article>,
        <article>
            <h2>props.titulo2</h2>
            <p>props.descricao2</p>
        </article>
    )
}

export default CardProjeto