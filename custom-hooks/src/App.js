import React from "react";

import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'

import { useRequestData } from "./hooks/useRequestData";
import { BASE_URL, URL_HP } from "./constants/constants";
function App() {
  
  

  const [nomeUsuarios, isLoadingNomes, isErrorNome] = useRequestData(`${BASE_URL}users`,[])
  const [postagens, isLoadingComentarios, isErrorComentarios] = useRequestData(`${BASE_URL}comments`, [])
  const [personagemHP, isLoadingHP, isErrorHP] = useRequestData(`${URL_HP}`, [])


  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Personagens de Harry Potter</Title>
      <NameContainer>
        {isLoadingHP && <p>Carregando</p>}
        {!isLoadingHP && isErrorHP && <p>Ocorreu um erro</p>}
        {!isLoadingHP && personagemHP && personagemHP.length > 0 && personagemHP.map((personagem)=>{
          return(
            <Card 
            key={personagem.id} 
            text={personagem.name} 
            backgroudColor={'nome'}
            textColor={'nome'}
            />  
          )
        })}
        {!isLoadingHP && !isErrorHP && personagemHP && personagemHP.length===0 && <p>Lista vazia</p>}

      </NameContainer>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingNomes && <p>Carregando</p>}
        {!isLoadingNomes && isErrorNome && <p>Ocorreu um erro</p>}
        {!isLoadingNomes && nomeUsuarios && nomeUsuarios.length > 0 && nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
        {!isLoadingNomes && !isErrorNome && nomeUsuarios && nomeUsuarios.length === 0 && <p>Lista vazia</p>}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoadingComentarios && <p>Carregando</p>}
        {!isLoadingComentarios && isErrorComentarios && <p>Ocorreu um erro</p>}
        {!isLoadingComentarios && postagens && postagens.length > 0 && postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      {!isLoadingComentarios && !isErrorComentarios && postagens && postagens.length===0 && <p>Lista vazia</p>}
      </PostContainer>
    </div>
  );
}

export default App;



