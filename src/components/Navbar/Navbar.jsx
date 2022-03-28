import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="notes-navbar">
            <p className="heading-name">Cheer Notes</p>
            <div className="search-container">
                <i class="fas fa-search search-icon"></i>
                <input className="notes-search-bar" placeholder="Search" type="search" name="search-notes" />
            </div>
        </nav>
    )
}

export { Navbar };