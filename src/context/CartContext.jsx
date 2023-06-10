import { createContext, useReducer, useState } from "react"

export const CartContext = createContext()

const initialState = { //siempre es un objeto, usualmente puedo querer tener mas cosas, total a pagar con inicio 0
    cart: []
    
}

const cartReducer = ( state, action ) => { // action, es la action que me manda el dispatch, siempre es un objeto que tiene type y payload
//payload cosas que le quiero mandar a la accion
    switch (action.type) {
        case "agregarAlCarrito" :
            return { ...state, cart: [...state.cart, action.payload]} // retorna un nuevo objeto
        case "deleteById":
            let newArray = state.cart.filter ( (product) => product.id !== action.payload ) // no es un error, es del eslint
            return {...state, cart: newArray}
            default: // retorna el estado actual
                return state
    }

}

const CartContectProvider = ({children}) => {

   const [ state , dispatch ] = useReducer(cartReducer, initialState) //este inicitial hace referencia al state


    let data = {
        state,
        dispatch,
        cart: state.cart
        
    };

    return (
        <CartContext.Provider value={data}>
                {children}
        </CartContext.Provider>
    )

}

export default CartContectProvider;