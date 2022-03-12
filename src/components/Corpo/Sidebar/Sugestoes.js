import Sugestao from "./Sugestao";

export default function Sugestoes(props) {

    console.log("Sugestoes1");
    // console.log(props);

    const lista = props.sugestoes.map(sugestao => {
        return <Sugestao username={sugestao.username} isFollowingYou={sugestao.isFollowingYou} />
    })

    console.log(lista);

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {lista}
        </div>
    );
}