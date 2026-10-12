import { useState } from 'react';
import CardProjeto from './CardProjeto';

function App() {
  const [selecionado, setSelecionado] = useState(false);
  
  function Selecao() {
    setSelecionado(!selecionado);
  }

  return (
    <>
      <CardProjeto 
        titulo1="MVP Tema Principal" 
        descricao1="Pessoas +50"
        titulo2="Time MVP"
        descricao2="8 pessoas"
        selecionado={selecionado}        
        onAlternarSelecao={Selecao}
      />
    </>
  );
}

export default App;
