import Filho from "./Filho";

export default function Pai(props) {
  function mensagem(params) {
    console.log(params);
  }

  return (
    <div>
      <Filho funcao={mensagem} />
    </div>
  );
}
