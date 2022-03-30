import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="notes-navbar">
           <Link to="/" ><p className="heading-name">Cheer Notes</p></Link> 
            <div className="search-container">
                <i className="fas fa-search search-icon"></i>
                <input className="notes-search-bar" placeholder="Search" type="search" name="search-notes" />
            </div>
        </nav>
    )
}

export { Navbar };