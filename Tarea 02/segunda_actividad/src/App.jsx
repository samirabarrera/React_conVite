import './App.css'
import BrowserRouter, { Route, Routes } from 'react-router-dom'
import DogBreedSearch from './components/DogBreedSearch'

function App() {

  return (
    <BrowserRouter>
    <DogBreedSearch />

    <Routes>
      /*<Route path='/' element = {} / >*/
    </Routes>

    
    </BrowserRouter>
  )
}

export default App
