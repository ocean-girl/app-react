import { useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {

  //se crean dos estados para guardar la info que llega de los input
  //evento, propiedad target.value posee los datos ingresados, se usa el evento del onchange del formc        



  const [userInfo, setUserInfo] = useState({
    email:"",
    password:""
  })



  const enviarForm = (evento) => {
    evento.preventDefault();
    console.log("se envio el formulario")
   
  }

  const capturarInputEmail = () => {

  }

  const capturarInputPassword = () => {

  }

  return (
    <div>
      <h1>Login</h1>
      <Link to="/">Volver al home</Link>
      </div>
      <div>
        <form onSubmit={enviarForm}>
          <input type="text" placeholder="Email" name="email" onChange={capturarInputEmail} />
          <input type="text" placeholder="Password" name="password" />
          <button type="submit"> Ingresar </button>

        </form>
    </div>
  )
}

export default Login