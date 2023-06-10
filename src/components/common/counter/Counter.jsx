const Counter = ( {contador, sumar, restar}) => {

    

  return (
    <div><h2>{contador}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
    
    </div>
  )
}

export default Counter