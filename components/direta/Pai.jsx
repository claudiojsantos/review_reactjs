import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Cláudio" familia={props.familia} />
      <Filho nome="Dalva" familia={props.familia} />
      <Filho {...props} nome="Aldinho" />
    </div>
  );
}
