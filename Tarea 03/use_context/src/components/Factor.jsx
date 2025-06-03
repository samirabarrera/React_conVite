import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function Factor() {
  const { factor, setFactor } = useContext(DataContext);

  return (
    <div>
      <label>Factor multiplicador: </label>
      <input
        type="number"
        value={factor}
        onChange={(e) => setFactor(Number(e.target.value))}
        step="0.1"
      />
    </div>
  );
}
