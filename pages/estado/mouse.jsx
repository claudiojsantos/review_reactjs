import { useState } from "react";

export default function mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const estilo = {
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  function mouseMove(ev) {
    setX(ev.clientX);
    setY(ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={mouseMove}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}
