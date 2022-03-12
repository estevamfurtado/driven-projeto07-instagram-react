import Logo from './Navbar/Logo';
import LogoMobile from './Navbar/LogoMobile';
import Pesquisa from './Navbar/Pesquisa';
import InstagramMobile from './Navbar/InstagramMobile';
import Icones from './Navbar/Icones';
import IconesMobile from './Navbar/IconesMobile';


export default function Navbar(props) {

    return (<div class="navbar">
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    </div>
    );
}
