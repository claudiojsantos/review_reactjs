import { useState } from "react";

export default function Formulario() {
  const [valor, setValor] = useState("Inicial");

  function setNovoValor() {
    setValor(valor + "!");
  }

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <div>
        <button onClick={setNovoValor}>Alterar</button>
      </div>
    </div>
  );
}
