import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import { StoreContextProvider } from "./context/StoreContext";

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreContextProvider>
  );
}
export default App;
