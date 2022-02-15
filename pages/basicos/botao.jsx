function click01() {
  console.log("Click#01");
}

export default function botao() {
  function click02() {
    console.log("Click#02");
  }

  return (
    <div>
      <button onClick={click01}>Click #01</button>
      <button onClick={click02}>Click #02</button>
      <button
        onClick={function () {
          console.log("Click#03");
        }}
      >
        Click #03
      </button>
      <button onClick={() => console.log("Click#04")}>Click #04</button>
      <button onClick={(e) => console.log(e)}>Click #05</button>
      <button onClick={(e) => console.log(e.altKey)}>Click #06</button>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
