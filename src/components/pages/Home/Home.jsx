import "./Home.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import Counter from "../../common/counter/Counter";


const Home = () => {

    const [ contador , setContador ] = useState(0)

    //console.log(cont)

    const sumar = () => {
        setContador( contador + 1)
    }

    const restar = () => {
        setContador( contador - 1)
    }

    return  (
        <div>
            
            <h1>Este es el home</h1>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/products">Ver productos</Link>
            <Counter contador={contador} sumar={sumar} restar={restar}  />

        </div>
    );
};

export default Home

