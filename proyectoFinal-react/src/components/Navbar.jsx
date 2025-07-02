import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import "../styles/Navbar.css";
import { loadFromLocalStorage, removeFromLocalStorage } from "../utils/localStorage"
import { CommonConstants } from "../utils/commonConstants";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(StoreContext);

  useEffect(() => {
    const userInfo = loadFromLocalStorage(CommonConstants.USER_INFO_STORAGE);
    if (userInfo) setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  const signout = () => {
    removeFromLocalStorage(CommonConstants.USER_INFO_STORAGE);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    isLoggedIn && (
      <nav className="Navbar">
        <div className="Navbar-links">
          <Link to={"/products"} className="Navbar-link">
            Productos
          </Link>
          <Link to={"/cart"} className="Navbar-link">
            Carrito de compra
          </Link>
        </div>
        <button onClick={signout} className="Navbar-button">
          Salir
        </button>
      </nav>
    )
  );
}
