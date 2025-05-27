import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClassComponent from './Components/ClassComponent'
import FunctionComponent from './Components/FunctionComponent'

function App () {
  return (
    <div>
      <h1>Mi primer proyecto en React</h1>
      <ClassComponent/>
      <FunctionComponent/>
    </div>
  );
}

export default App