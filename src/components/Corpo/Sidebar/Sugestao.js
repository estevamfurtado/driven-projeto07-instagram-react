

export default function Sugestao(props) {

    let message = "Novo no Instagram";
    if (props.isFollowingYou) {
        message = "Segue você";
    }

    console.log(props.username, props.isFollowingYou, message);

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.username}.svg`}/>
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{message}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}