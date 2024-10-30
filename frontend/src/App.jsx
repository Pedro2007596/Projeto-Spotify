import Header from './components/Header'
import ConteudoPrincipal from './components/Paginas/ConteudoPrincipal'
import ContainerCP from './components/Paginas/ContainerCP'
import Sidebar from './components/Sidebar/Sidebar'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <Header></Header>
      <ContainerCP>
        <Sidebar></Sidebar>
        <Outlet/>
      </ContainerCP>
    </>
  )
}
export default App
