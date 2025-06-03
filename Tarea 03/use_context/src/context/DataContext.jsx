import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [factor, setFactor] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <DataContext.Provider value={{
      products,
      factor,
      setFactor,
      selectedProduct,
      setSelectedProduct,
      isModalOpen,
      setIsModalOpen
    }}>
      {children}
    </DataContext.Provider>
  );
}
