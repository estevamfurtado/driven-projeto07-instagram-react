import Navbar from './Navbar.js';
import Corpo from './Corpo.js';
import FundoMobile from './FundoMobile.js';


export default function App(props) {

    return (
        <div>
            <Navbar />
            <Corpo data={props.data} />
            <FundoMobile />
        </div>
    );
}