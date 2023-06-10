import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const ProductsList = () => {

    const {dispatch} = useContext(CartContext);

    const [product, setProducts] = useState([]);

    useEffect(() => {

        const getData = async () => {

            const getProducts = axios.get("https://fakestoreapi.com/product");
            const res = await getProducts;
            setProducts(res.data);
        };

        getData();


    }, []);

    
  return (
    <div>
        {product.map((product) => {
            return ( 
            <div key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.image} alt="" style={{width: "200px"}} />
                <button onClick={() => dispatch( {type: "agregarAlCarrito", payload: product } )}>Agregar</button>
            </div>
            );
        })};        
    </div>
  );
};

export default ProductsList