import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        <ul>
            <li>Productos</li>
            <Link to="/">Ir al home</Link>
            <Link to="/cart">Ir al carrito</Link>
        </ul>
 
    </div>
  )
}

export default Navbar