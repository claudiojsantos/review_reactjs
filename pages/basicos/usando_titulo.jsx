import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
            <Titulo title="Página de Cadastro" description="Incluir, alterar e excluir coisas" />
            <Titulo title="Página de Login" description="Informe seu email e senha" pequeno />
        </div>
    )
}