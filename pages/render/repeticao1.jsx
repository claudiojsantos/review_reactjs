export default function repeticao1() {
  const listaAprovados = ["Aldo", "Antonio", "Claudio", "Dalva"];

  function renderList() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>);
  }

  return <ul>{renderList()}</ul>;
}

// function renderList() {
//   const jsx = [];

//   for (let i = 0; i < listaAprovados.length; i++) {
//     jsx.push(<li key={i}>{listaAprovados[i]}</li>);
//   }

//   return jsx;
// }
