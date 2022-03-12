export default function Usuario(props) {

    console.log("USUARIO")
    console.log(props);

    return (
        <div class="usuario">
        <img src={`assets/img/${props.usuario.username}.svg`}/>
        <div class="texto">
            <strong>{props.usuario.username}</strong>
            {props.usuario.name}
        </div>
    </div>

    );
}