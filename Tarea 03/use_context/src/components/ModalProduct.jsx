import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function ModalProduct() {
  const { selectedProduct, isModalOpen, setIsModalOpen, factor } = useContext(DataContext);

  if (!isModalOpen || !selectedProduct) return null;

  const closeModal = () => setIsModalOpen(false);
  const finalPrice = (selectedProduct.price * factor).toFixed(2);

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal}>Cerrar</button>
        <h2>{selectedProduct.title}</h2>
        <img src={selectedProduct.image} alt={selectedProduct.title} width="150" />
        <p>Precio base: ${selectedProduct.price}</p>
        <p>Precio con factor ({factor}): ${finalPrice}</p>
      </div>
    </div>
  );
}