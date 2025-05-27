import './App.css'
import BrowserRouter, { Route, Routes } from 'react-router-dom';
import DogBreedSearch from 'components/DogBreedSearch.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DogBreedSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
