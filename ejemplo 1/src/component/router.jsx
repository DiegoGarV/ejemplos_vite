// Recibe la ruta y renderiza el componente

import Home from "./home"
import Login from "./login"

function Router({ruta, setRutaActual}) {
    switch (ruta) {
        case "/home":
            return <Home setRutaActual = {setRutaActual} />
        case "/login":
            return <Login setRutaActual = {setRutaActual} />
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router