export default function Conteudo(props) {

    let media = null;

    if (props.media.type === "img") {
        media = <img src={`assets/img/${props.media.file}`} />;
    }
    else {
        media = (
        <video autoPlay muted>
            <source src={`assets/video/${props.media.file}.mp4`} type="video/mp4" />
            <source src={`assets/video/${props.media.file}.ogv`} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        )
    }

    return (
        <div class="conteudo">
            {media}
        </div>
    )
}