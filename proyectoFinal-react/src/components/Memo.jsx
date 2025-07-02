import { useMemo } from "react";

export default function Memo({ count }) {
  const expensiveCalculation = (num) => {
    console.log("Calculando: ", num);
    let total = 0;
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        total += i + j;
      }
    }
    console.log("El resultado es: ", total + num);
    return total + num;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Resultado costoso: {result}</p>
    </div>
  );
}
