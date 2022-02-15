export default function Titulo(props){
    return props.pequeno ? (
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    ) : (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    )
}