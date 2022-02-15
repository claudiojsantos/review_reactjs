export default function lista1(){
    
    return (
        <div>
            {lista()}
        </div>
    )
}

function lista() {
    const lista = [];

    for (let i = 1; i <= 10; i++) {
        lista.push(<span key={i}>{i}, </span>)
    }

    return lista
}