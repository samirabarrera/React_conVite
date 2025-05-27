import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('blue');

  const rojo = () => setColor('red');
  const azul = () => setColor('blue');
  const verde = () => setColor('green');
  const reset = () => setColor('white');

  return (
    <>
      <div style={{
        width: '200px',
        height: '200px',
        backgroundColor: color,
        padding: '50px'
      }}>
        Caja {color}
      </div>

      <button onClick={rojo}>Rojo</button>
      <button onClick={azul}>Azul</button>
      <button onClick={verde}>Verde</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App
