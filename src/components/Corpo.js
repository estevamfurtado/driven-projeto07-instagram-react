import Esquerda from './Corpo/Esquerda.js';
import Sidebar from './Corpo/Sidebar.js';


export default function Corpo(props) {
    
    return (
        <div class="corpo">
            <Esquerda stories={props.data.stories} posts={props.data.posts}/>
            <Sidebar usuario={props.data.usuario} sugestoes={props.data.sugestoes}/>
        </div>
    );
}
