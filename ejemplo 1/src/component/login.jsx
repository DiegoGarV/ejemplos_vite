function Login({setRutaActual}) {   
    return (
        <>
            <div>
                <h1>Inicio de Sesión</h1>
                <div className="datos-login">
                    <label>Email:</label>
                    <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@gmail.com"
                    />
                    <label>Contraseña:</label>
                    <input
                            type="password"
                            id="password"
                            name="password"
                    />
                </div>
            </div>
            <div className="button">
                <button onClick={()=>{setRutaActual("/home")}}>Inciar Sesión</button>
            </div>
        </>
    )
}

export default Login