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

const Aside = () => {

    const navigate = useNavigate();
    const  { authDispatch } = useAuth();
    const { activePage, setActivePage, noteDispatch, filterNote, setFilterNote } = useNote();

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

     return (
        <aside className="notes-aside-container">
            <Link to="/home">
                <div onClick={() => setActivePage("notes")} className={`aside-items ${activePage === "notes" ? "item-active" : ""}`}>
                    <CgNotes className="aside-icon"/>
                    <p className="aside-title">Notes</p>
                </div>
            </Link>  

            <Link to="/tags">
            <div onClick={() => setActivePage("label")} className={`aside-items ${activePage === "label" ? "item-active" : ""}`}>
                <MdOutlineLabel className="aside-icon"/>
                <p className="aside-title">Tags</p>
            </div>
            </Link>
        
            <Link to="/archive">
            <div onClick={() => setActivePage("archive")} className={`aside-items ${activePage === "archive" ? "item-active" : ""}`}>
                <RiInboxArchiveLine className="aside-icon"/>
                <p className="aside-title">Archive</p>
            </div>
            </Link>
          
            <Link to="/trash">
            <div onClick={() => setActivePage("trash")} className={`aside-items ${activePage === "trash" ? "item-active" : ""}`}>
                <FaRegTrashAlt className="aside-icon"/>
                <p className="aside-title">Trash</p>
            </div>
            </Link>

            <div className="filter-container">
                <div className="filter-and-clear-box">
                    <p className="filter-heading">Filters</p>
                    <p onClick={() => clearFilter()} className="filter-clear">Clear</p>
                </div>
                <p className="filter-title">Sort by Priority</p>
                <div className="priority-filter-options">
                    <div className="priority-input">
                        <input 
                        type="radio" 
                        name="priority" 
                        checked={filterNote.priority === "High"}
                        onChange={() => setHighPriority()} 
                        />
                        <label htmlFor="high">High</label>
                    </div>
                    <div className="priority-input">
                        <input 
                        type="radio" 
                        name="priority"
                        checked={filterNote.priority === "Medium"}
                        onChange={() => setMediumPriority()}
                         />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className="priority-input">
                        <input 
                        type="radio" 
                        name="priority"
                        checked={filterNote.priority === "Low"}
                        onChange={() => setLowPriority()}
                         />
                        <label htmlFor="low">Low</label>
                    </div>
                </div>

                <p className="filter-title">Sort by Date</p> 
                <div className="priority-filter-options">
                    <div className="priority-input">
                            <input 
                            type="radio" 
                            name="sortByDate"
                            checked={filterNote.sortByDate === "newest"}
                            onChange={() => newestFirstNote()}
                            />
                            <label htmlFor="low">Newest First</label>
                    </div> 
                    <div className="priority-input">
                            <input 
                            type="radio" 
                            name="sortByDate"
                            checked={filterNote.sortByDate === "oldest"}
                            onChange={() => oldestFirstNote()}
                            />
                            <label htmlFor="low">Oldest First</label>
                    </div> 
                </div>

            </div>
            
            <div className="profile">
                <div className="image-and-title-container">
                    <CgProfile className="profile-icon" />
                    <p className="profile-name">User Guest</p>
                </div>
                <AiOutlineLogout onClick={logoutClickHandler} className="aside-icon cursor" />
            </div>
            
        </aside>

     )
}

export { Aside };