import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMenu} from "../../Contexts/showMenuContext";
import { AiOutlineLogout } from 'react-icons/ai';
import "./Navbar.css";
import { useAuth } from "../../Contexts/authentication-context";

const Navbar = () => {

    const {setShowMenu } = useMenu();
    const {  authDispatch } = useAuth();
    const navigate = useNavigate();

    const logoutClickHandler = () => {
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");
    }

    return (
        <nav className="notes-navbar">
            <GiHamburgerMenu onClick={() => setShowMenu(open => !open)} className="hamburger-icon" />
             <Link to="/" ><p className="heading-name">Cheer Notes</p></Link> 
             <AiOutlineLogout className="logout-nav-icon" onClick={() => logoutClickHandler()} />
        </nav>
    )
}

export { Navbar };