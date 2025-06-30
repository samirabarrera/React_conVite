import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Login />} />

        <Route element={<ProtectedRoute />} >
        <Route path= "/products" element={<Products />} />
        <Route path= "/add-product" element={< AddProduct />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
