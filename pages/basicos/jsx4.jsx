export default function jsx4(){
    const subtitulo = "Estou no javaScript"
    const trechoH3 = <h3>{3 * 3}</h3>

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoH3}
            {entreValores(20.4, 15, 30)}
        </div>
    )
}

function entreValores(valor, min, max) {
    if (valor >= min && valor <= max) {
        return "sim"
    } else {
        return "não"
    }
}