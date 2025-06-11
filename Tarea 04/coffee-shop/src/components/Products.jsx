import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch";
import "./Products.css";

export default function Products() {
  const { data: posts, loading, error, setProducts }
    = useFetch("https://api.sampleapis.com/coffee/hot");
  useEffect(() => {});

  if (loading) return <p>Cargando... </p>;
  if (error) return <p> Error: {error} </p>;

  const agregarAlCarrito = (post) => {};
  return (
    <div className="productos">
      {posts.map((post) => (
        <div key={post.id} className="producto">
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} width="150" />
          <p>{post.description}</p>
          <p>
            <strong>Precio: Q{post.price}</strong>
          </p>
          <label>
            Cantidad:
            <input
              type="number"
              min="1"
              value={post.cantidad}
              onChange={(e) => {
                const nuevaCantidad = parseInt(e.target.value);
                setProducts((previousProducts) =>
                  previousProducts.map((p) =>
                    p.id === Products.id ? { ...p, cantidad: nuevaCantidad } : p
                  )
                );
              }}
            />
          </label>
          <button onClick={() => agregarAlCarrito(post)}>+</button>
        </div>
      ))}
    </div>
  );
}