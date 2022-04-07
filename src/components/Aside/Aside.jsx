import "./Aside.css";
import { useNavigate } from "react-router";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from "../../Contexts/authentication-context";
import { Link } from "react-router-dom";
import { useNote } from "../../Contexts/notesActions-context";
import { useMenu } from "../../Contexts/showMenuContext";
import { useClickOutside } from "../../Utilities-Functions/useClickOutside";
import { useTheme } from "../../Contexts/themeContext";

const Aside = () => {
    
    const navigate = useNavigate();
    const  { authDispatch } = useAuth();
    const { activePage, setActivePage, noteDispatch, filterNote, setFilterNote } = useNote();
    const { showMenu, setShowMenu } = useMenu();
    const { theme } = useTheme();

    const logoutClickHandler = (e) => {
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");
    }

    const setHighPriority = () => {
        setFilterNote(pre => ({...pre, priority : "High"}));
        noteDispatch({ type: "PRIORITY_HIGH", payload: "High" });
    }

    const setMediumPriority = () => {
        setFilterNote(pre => ({...pre, priority : "Medium"}));
        noteDispatch({ type: "PRIORITY_MEDIUM", payload: "Medium" });
    }

    const setLowPriority = () => {
        setFilterNote(pre => ({...pre, priority : "Low"}));
        noteDispatch({ type: "PRIORITY_LOW", payload: "Low" });
    }

    const clearFilter = () => {
        setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));
        noteDispatch({ type: "CLEAR_FILTER" });
    }

    const newestFirstNote = () => {
        setFilterNote(pre => ({...pre, sortByDate : "newest"}));
        setFilterNote(pre => ({...pre, priority : ""}));
        noteDispatch({ type: "FILTER_NEWEST_FIRST" });  
    }

    const oldestFirstNote = () => {
        setFilterNote(pre => ({...pre, sortByDate : "oldest"}));
        setFilterNote(pre => ({...pre, priority : ""}));
        noteDispatch({ type: "FILTER_OLDEST_FIRST" });  
    }

    const sideMenu = useClickOutside(() => {
        setShowMenu(false);
    })

    const color = theme === "dark" ? "color-fff" : "";

     return (
        <aside ref={sideMenu} className={`notes-aside-container ${theme === "dark" ? "dark-bg" : ""} `}>
            <div className={`hide-show ${!showMenu && "block" } ${theme === "dark" ? "dark-bg" : ""} `}>
            <Link to="/home" onClick={() => setShowMenu(open => !open)}>
                <div onClick={() => setActivePage("notes")} className={`aside-items  ${activePage === "notes" ? "item-active" : ""}`}>
                    <CgNotes className={`aside-icon ${activePage !== "notes" ? color : ""} `}/>
                    <p className={`aside-title ${activePage !== "notes" ? color : ""} `}>Notes</p>
                </div>
            </Link>  

            <Link to="/tags" onClick={() => setShowMenu(open => !open)}>
            <div onClick={() => setActivePage("label")} className={`aside-items ${activePage === "label" ? "item-active" : ""}`}>
                <MdOutlineLabel className={`aside-icon ${activePage !== "label" ? color : ""}  `}/>
                <p className={`aside-title ${activePage !== "label" ? color : ""} `}>Tags</p>
            </div>
            </Link>
        
            <Link to="/archive" onClick={() => setShowMenu(open => !open)}>
            <div onClick={() => setActivePage("archive")} className={`aside-items ${activePage === "archive" ? "item-active" : ""}`}>
                <RiInboxArchiveLine className={`aside-icon ${activePage !== "archive" ? color : ""} `}/>
                <p className={`aside-title ${activePage !== "archive" ? color : ""} `}>Archive</p>
            </div>
            </Link>
          
            <Link to="/trash" onClick={() => setShowMenu(open => !open)}>
            <div onClick={() => setActivePage("trash")} className={`aside-items ${activePage === "trash" ? "item-active" : ""}`}>
                <FaRegTrashAlt className={`aside-icon  ${activePage !== "trash" ? color : ""} `}/>
                <p className={`aside-title ${activePage !== "trash" ? color : ""} `}>Trash</p>
            </div>
            </Link>

            <div className="filter-container">
                <div className="filter-and-clear-box">
                    <p className={`filter-heading ${theme === "dark" ? "color-fff" : ""}`}>Filters</p>
                    <p onClick={() => clearFilter()} className={`filter-clear ${theme === "dark" ? "color-fff" : ""} `}>Clear</p>
                </div>
                <p className={`filter-title ${theme === "dark" ? "color-fff" : ""} `}>Sort by Priority</p>
                <div className="priority-filter-options">
                    <div className="priority-input">
                        <input 
                        type="radio" 
                        name="priority" 
                        checked={filterNote.priority === "High"}
                        onChange={() => setHighPriority()} 
                        />
                        <label className={`${theme === "dark" ? "color-fff" : ""}`} htmlFor="high">High</label>
                    </div>
                    <div className="priority-input">
                        <input 
                        type="radio" 
                        name="priority"
                        checked={filterNote.priority === "Medium"}
                        onChange={() => setMediumPriority()}
                         />
                        <label className={`${theme === "dark" ? "color-fff" : ""}`} htmlFor="medium">Medium</label>
                    </div>
                    <div className="priority-input">
                        <input 
                        type="radio" 
                        name="priority"
                        checked={filterNote.priority === "Low"}
                        onChange={() => setLowPriority()}
                         />
                        <label className={`${theme === "dark" ? "color-fff" : ""}`} htmlFor="low">Low</label>
                    </div>
                </div>

                <p className={`filter-title ${theme === "dark" ? "color-fff" : ""} `}>Sort by Date</p> 
                <div className="priority-filter-options">
                    <div className="priority-input">
                            <input 
                            type="radio" 
                            name="sortByDate"
                            checked={filterNote.sortByDate === "newest"}
                            onChange={() => newestFirstNote()}
                            />
                            <label className={`${theme === "dark" ? "color-fff" : ""}`} htmlFor="low">Newest First</label>
                    </div> 
                    <div className="priority-input">
                            <input 
                            type="radio" 
                            name="sortByDate"
                            checked={filterNote.sortByDate === "oldest"}
                            onChange={() => oldestFirstNote()}
                            />
                            <label className={`${theme === "dark" ? "color-fff" : ""}`} htmlFor="low">Oldest First</label>
                    </div> 
                </div>

            </div>
            </div>
            
            <div className="profile">
                <div className="image-and-title-container">
                    <CgProfile className={`profile-icon ${theme === "dark" ? "color-fff" : ""} `} />
                    <p className={`profile-name ${theme === "dark" ? "color-fff" : ""} `}>User Guest</p>
                </div>
                <AiOutlineLogout onClick={logoutClickHandler} className={`aside-icon cursor ${theme === "dark" ? "color-fff" : ""} `} />
            </div>            
        </aside>

     )
}

export { Aside };