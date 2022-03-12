import Usuario from './Sidebar/Usuario';
import Sugestoes from './Sidebar/Sugestoes';
import Links from './Sidebar/Links';
import Copyright from './Sidebar/Copyright';


export default function Sidebar(props) {

    console.log("SIDEBAR!!");
    console.log(props);

    return (
        <div class="sidebar">

            <Usuario usuario={props.usuario}/>
            <Sugestoes sugestoes={props.sugestoes} />
            <Links />
            <Copyright />
        </div>

    );
}