import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  const loadProducts = async () => {
    try {
      const collectionRef = collection(db, "products");
      const querySnapshot = await getDocs(collectionRef);
      console.log(querySnapshot.docs);
      const productsInCollection = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(productsInCollection);
    } catch (err) {
      console.error("Error cargando productos: ", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const signout = () => {
    localStorage.removeITem("userEmail")
    navigate("/")
  }


  return (
    <>
    <button onClick={signout}>Salir</button>
    <Link to="/add-product">Agregar producto</ Link>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div>
            <div>{product.name}</div>
            <div>
              <img style={width } src={product.image} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
