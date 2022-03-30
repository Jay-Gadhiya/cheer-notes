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


const Aside = () => {

    const navigate = useNavigate();
    const  { authDispatch } = useAuth();

    // user logout click handler
    const logoutClickHandler = (e) => {
        console.log("clicked");
        localStorage.removeItem("token");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");

    }

     return (
        <aside className="notes-aside-container">
            <Link to="/home">
                <div className="aside-items item-active ">
                    <CgNotes className="aside-icon"/>
                    <p className="aside-title">Notes</p>
                </div>
            </Link>  

            <div className="aside-items">
                <MdOutlineLabel className="aside-icon"/>
                <p className="aside-title">Labels</p>
            </div>
        
            <Link to="/archive">
            <div className="aside-items">
                <RiInboxArchiveLine className="aside-icon"/>
                <p className="aside-title">Archive</p>
            </div>
            </Link>
          
            <div className="aside-items">
                <FaRegTrashAlt className="aside-icon"/>
                <p className="aside-title">Trash</p>
            </div>
            
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