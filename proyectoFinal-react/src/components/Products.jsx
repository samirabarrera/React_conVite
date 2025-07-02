import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Products.css";

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
    <div className="products-container">
      <div className="products-header">
        <button onClick={signout}>Salir</button>
        <Link to="/add-product">Agregar producto</Link>
      </div>

      <h2>Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div>{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}