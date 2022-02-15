import { useEffect, useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../functions/mega/mega";

export default function megasena() {
  const [qtd, setQtd] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderNumeros() {
    return numeros.map((num) => <NumeroDisplay key={num} numero={num} />);
  }

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>MegaSena</h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {renderNumeros()}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="number"
          min={6}
          max={15}
          value={qtd}
          onChange={(ev) => setQtd(ev.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtd))}>Gerar aposta</button>
      </div>
    </div>
  );
}
