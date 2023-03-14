import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import NaoEncontrada from './NaoEncontrada'
import Produto from './Produto'
import Sobre from './Sobre'
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="produto/:id/*" element={<Produto/>}>
          <Route path="" element={<ProdutoDescricao/>}/>
          <Route path="avaliacao" element={<ProdutoAvaliacao/>}/>
          <Route path="customizacao" element={<ProdutoCustomizado/>}/>
        </Route>
        <Route path="sobre" element={<Sobre/>}/>

        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>

    </BrowserRouter>
    )
}

export default App