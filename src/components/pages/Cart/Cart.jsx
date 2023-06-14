import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const Cart = () => {

// con usecontext ----- const {cart, dispatch } = useContext(CartContext) //viene del contexto, para no consumir todo el state, solo consumo el cart

  return (
    <div>
      {
        cart.cart.map( (product)=> {
          return <div key={product.id}>
            <h4>{product.title}</h4>
            <button onClick={() => dispatch ( {type: "deleteById", payload: product.id})}>Eliminar</button>
          </div>
          
        })
      }
    </div>
  )
}

export default Cart