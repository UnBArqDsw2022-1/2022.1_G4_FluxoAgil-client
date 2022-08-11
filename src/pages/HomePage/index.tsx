import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import reactLogo from '../../assets/react.svg'
import fluxoAgilLogo from '../../assets/logo.png'
import './styles.css'

export const HomePage = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div>
        <a
          href="https://github.com/UnBArqDsw2022-1/2022.1_G4_FluxoAgil-web"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={fluxoAgilLogo}
            className="logo react"
            alt="Logo fluxo agil"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fluxo Ágil</h1>
      <h3>
        Em breve você terá a experiência mais agradável de recomendação de
        disciplinas da UnB
      </h3>
      <div className="card">
        <p>Enquanto isso, brinque com o botão:</p>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Este botão clicado {count} vezes
        </Button>

        <p>
          Saiba mais clicando{' '}
          <a href="https://unbarqdsw2022-1.github.io/2022.1_G4_FluxoAgil/">
            aqui
          </a>
          .
        </p>
      </div>
      <div>
        <Link to="/testpage">Test page</Link>
      </div>
    </div>
  )
}
