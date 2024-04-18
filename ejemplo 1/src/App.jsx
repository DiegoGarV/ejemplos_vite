import { useEffect, useState } from 'react'
import './App.css'
import Router from './component/router'

function App() {

  const [rutaActual, setRutaActual] = useState("")

  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual("/login")
    console.log(window.location);

  }, [])

  return (
    <div className='sitio-web'>
      <div className='paginas'>
          <Router ruta={rutaActual} setRutaActual={setRutaActual} />
      </div>
    </div>
  )
}

export default App
