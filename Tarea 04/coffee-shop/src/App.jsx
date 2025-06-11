import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from './components/Nav'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={< Products />} />
        <Route path="/finish-shop" element={<Cart />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App