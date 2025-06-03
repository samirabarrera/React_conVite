import './App.css'
import { DataProvider } from './context/DataContext'
import Factor from './components/Factor';
import Products from './components/Products';
import ModalProduct from './components/ModalProduct';

function App() {

  return (
    <>
      <DataProvider>
        <ModalProduct />
        <Factor />
        <Products />
      </DataProvider>
    </>
  )
}

export default App