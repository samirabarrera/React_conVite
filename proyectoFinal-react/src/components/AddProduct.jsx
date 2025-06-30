import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";

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
    <>
      <form onSubmit={(e) => handleProduct(e)}>
        <label>Nombre: </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label>Image: </label>
        <input
          type="text"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
        <button type="submit">Guardar producto</button>
      </form>
    </>
  );
}
