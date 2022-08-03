import { useState } from 'react'
import Button from '@mui/material/Button'
import reactLogo from './assets/react.svg'
import fluxoAgilLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://github.com/UnBArqDsw2022-1/2022.1_G4_FluxoAgil-web" target="_blank" rel="noreferrer">
          <img src={fluxoAgilLogo} className="logo react" alt="Logo fluxo agil" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fluxo Ágil</h1>
      <div className="card">
        <p>Esse é o número de semestres que faltam pra você se formar</p>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Semestres:
          {count}
        </Button>
      </div>
    </div>
  )
}

export default App
