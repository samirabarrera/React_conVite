import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { loadFromLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";
import { StoreContext } from "../context/StoreContext";
import "../styles/Navbar.css";

export function NavBar() {

  const navigate = useNavigate()
  const { isLoggedIn, setIsLoggedIn } = useContext(StoreContext);

  useEffect(()=>{
    const userInfo = loadFromLocalStorage(CommonConstants.USER_INFO_STORAGE)
    if(userInfo)
      setIsLoggedIn(true);
  },[setIsLoggedIn])

  const signout = () => {
    removeFromLocalStorage(CommonConstants.USER_INFO_STORAGE);
    setIsLoggedIn(false)
    navigate("/")
  }

  return isLoggedIn && (
    <nav>
      <Link to={"/products"}>Productos</Link>
      <Link to={"/cart"}>Carrito de compra</Link>
      <button onClick={signout}>Salir</button>  
    </nav>
  )
}