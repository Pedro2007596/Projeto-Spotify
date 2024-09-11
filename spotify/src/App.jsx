import Header from './components/Header'
import ConteudoPrincipal from './components/Paginas/ConteudoPrincipal'
import ContainerCP from './components/Paginas/ContainerCP'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <>
      <Header></Header>
      <ContainerCP>
        <Sidebar></Sidebar>
        <ConteudoPrincipal></ConteudoPrincipal>
      </ContainerCP>
    </>
  )
}
export default App
