import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import "../styles/AddProduct.css"

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        name: productName,
        image: productImage,
      });
      setProductName("")
      setProductImage("")

    } catch (e) {
        console.log("Hubo un error al agregar el nuevo producto ", e);
    }
  };
  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={(e) => handleProduct(e)}>
        <label className="form-label">Nombre: </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Image: </label>
        <input
          type="text"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Guardar producto</button>
      </form>
    </div>
  );
}
