import { useState } from "react";

export default function contador() {
  const [x, setCounter] = useState(0);

  const inc = () => setCounter(x + 1);

  const dec = () => setCounter(x - 1);

  return (
    <div>
      <h1>Contador</h1>
      <h2>Valor: {x}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}
