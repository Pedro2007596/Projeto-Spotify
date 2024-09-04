import { useState } from 'react'
import Header from './Componentes/Header'
import Card from './Componentes/Cards/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>

      <main>
        <nav>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </nav>

        <section>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
      </main>
    </>
  )
}

export default App
