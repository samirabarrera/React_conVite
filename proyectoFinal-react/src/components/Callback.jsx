import React from "react";
import { useState } from "react";
import { useCallback } from "react";

const Boton = React.memo(({ onClick }) => {
  console.log("Boton renderizado");
  return <button onClick={onClick}>Click en Botón</button>;
});

function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Botón clickeado");
  }, []);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Boton onClick={handleClick} />
    </div>
  );
}


export default Callback;
