import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMenu} from "../../Contexts/showMenuContext";
import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import "./Navbar.css";
import { useAuth } from "../../Contexts/authentication-context";
import { useTheme } from "../../Contexts/themeContext";

const Navbar = () => {

    const {setShowMenu } = useMenu();
    const {  authDispatch } = useAuth();
    const navigate = useNavigate();
    const { theme, setTheme } = useTheme();

    const logoutClickHandler = () => {
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");
    }

    const themeHadler = () => {
        setTheme(theme => theme === "light" ? "dark" : "light" );
    } 

    return (
        <nav className="notes-navbar">
            <GiHamburgerMenu onClick={() => setShowMenu(open => !open)} className="hamburger-icon" />
             <Link to="/" ><p className="heading-name">Cheer Notes</p></Link> 
             {
                theme === "dark"
                 ?
                <MdOutlineLightMode onClick={() => themeHadler()} className="theme-icon" />
                :
                <MdOutlineDarkMode onClick={() => themeHadler()} className="theme-icon" />

             }
             <AiOutlineLogout className="logout-nav-icon" onClick={() => logoutClickHandler()} />
        </nav>
    )
}

export { Navbar };