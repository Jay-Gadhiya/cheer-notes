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
    const { activePage, setActivePage } = useNote();

    // user logout click handler
    const logoutClickHandler = (e) => {
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");
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
            
            <div className="profile">
                <div className="image-and-title-container">
                    <CgProfile className="profile-icon" />
                    <p className="profile-name">Jay Gadhiya</p>
                </div>
                <AiOutlineLogout onClick={logoutClickHandler} className="aside-icon cursor" />
            </div>
            
        </aside>

     )
}

export { Aside };