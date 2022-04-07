import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMenu} from "../../Contexts/showMenuContext";
import "./Navbar.css";

const Navbar = () => {

    const {setShowMenu } = useMenu();

    return (
        <nav className="notes-navbar">
            <GiHamburgerMenu onClick={() => setShowMenu(open => !open)} className="hamburger-icon" />
           <Link to="/" ><p className="heading-name">Cheer Notes</p></Link> 
        </nav>
    )
}

export { Navbar };