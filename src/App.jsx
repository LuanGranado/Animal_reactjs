import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Exibir from './components/Exibir'
import Formulario from './components/Formulario'

function App() {
  const [animais, setAnimais] = useState([{
    URL: 'https://vidanimal.com.br/wp-content/uploads/beagle.jpg',
    Raça: 'Labrador',
    Local: 'Itamaraty',
    Status: 'Perdido'
  }])

  const adicionarAnimal = (animal) => {
    setAnimais([...animais, animal])
    console.log(animais)
  }

  const deletarAnimal = (index) => {
    const novosAnimais = animais.filter((animal, i) => i !== index)
    setAnimais(novosAnimais)
  }

  const mudarStatus = (index) => {
    const novosAnimais = animais.map((animal, i) => {
      if (i === index) {
        if (animal.Status === 'Perdido') {
          animal.Status = 'Encontrado'
        } else {
          animal.Status = 'Perdido'
        }
      }
      return animal
    })
    setAnimais(novosAnimais)
  }

  return (
    <>
      <Header />
      <main className="container">
        <Formulario adicionarAnimal={adicionarAnimal} />
        <section className="animais">
          {animais.map((animal, index) => (
            <Exibir animal={animal} deletarAnimal={deletarAnimal} mudarStatus={mudarStatus} index={index}/>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
