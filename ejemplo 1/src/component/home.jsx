function Home({setRutaActual}) {
  return (
    <>
      <div>
          <h1>¡BIENVENIDO!</h1>
          <p>Este es el Home</p>
      </div>
      <div className="button">
          <button onClick={()=>{setRutaActual("/login")}}>Regresar</button>
      </div>
    </>
  )
}

export default Home