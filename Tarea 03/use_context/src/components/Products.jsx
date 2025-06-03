import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function Products() {
  const { products, setSelectedProduct, setIsModalOpen } = useContext(DataContext);

  const handleClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="products">
      <h2>Productos disponibles:</h2>
      {
        products.length > 0 ? (
          products.map(p => (
            <div key={p.id} onClick={() => handleClick(p)}>
              <h4>{p.title}</h4>
              <img src={p.image} alt={p.title} width="100" />
              <p>${p.price}</p>
            </div>
          ))
        ) : (
          <p>No se han encontrado productos</p>
        )
      }
    </div>
  );
}
