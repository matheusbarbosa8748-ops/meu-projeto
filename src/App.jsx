import './CardProjeto'
import { useState } from 'react'
import CardProjeto from './CardProjeto'

function App() {
  const [count, setCount] = useState(0)
  return (
    <CardProjeto titulo="MVP Tema" descricao = "Pessoas +50"/>
  )
}
