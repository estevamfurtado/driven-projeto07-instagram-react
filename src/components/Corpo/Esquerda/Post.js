import Topo from "./Post/Topo";
import Conteudo from "./Post/Conteudo";
import Fundo from "./Post/Fundo";

export default function Post(props) {

    console.log("post!");

    return (
        <div class="post">

            <Topo username={props.username}/>
            <Conteudo media={props.media}/>
            <Fundo likes={props.likes}/>
            
        </div>
    )
}