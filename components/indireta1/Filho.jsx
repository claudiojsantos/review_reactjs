export default function Filho(props) {
  return (
    <div>
      <button onClick={props.funcao}>Botão 01</button>
      <button onClick={() => props.funcao("Ligação Indireta - Filho para Pai")}>
        Botão 02
      </button>
    </div>
  );
}
