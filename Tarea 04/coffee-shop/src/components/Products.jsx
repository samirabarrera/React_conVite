import { useState, useEffect, useContext } from "react"
import useFetch from "../hooks/useFetch"

export default function Products () {
    const { data: posts, loading, error, mensaje } = useFetch("https://api.sampleapis.com/coffee/hot")
    const [products, setProducts] = useState([])

    useEffect(() => {
        
    })

    if(loading) return <p>Cargando... </p>
    if(error) return <p> Error: {error} </p>

    mensaje()

    return (
        <div className="productos">
            {products.map(product => (
                <div key={product.id} className="producto">
                    <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} width="150" />
                        <p>{product.description}</p>
                        <p><strong>Precio: Q{product.price}</strong></p>
          <label>
            Cantidad:
            <input
              type="number"
              min="1"
              value={product.cantidad}
              onChange={(e) => {
                const nuevaCantidad = parseInt(e.target.value)
                setProducts(prev =>
                  prev.map(p =>
                    p.id === product.id ? { ...p, cantidad: nuevaCantidad } : p
                  )
                )
              }}
            />
          </label>
          <button onClick={() => agregarAlCarrito(product)}>+</button>
        </div>
      ))}
    </div>
    )
}