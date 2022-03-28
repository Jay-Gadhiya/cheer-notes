import "./Aside.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';


const Aside = () => {
     return (
        <aside className="notes-aside-container">
            <div className="aside-items item-active ">
                <CgNotes className="aside-icon"/>
                <p className="aside-title">Notes</p>
            </div>
            <div className="aside-items">
                <MdOutlineLabel className="aside-icon"/>
                <p className="aside-title">Labels</p>
            </div>
            <div className="aside-items">
                <RiInboxArchiveLine className="aside-icon"/>
                <p className="aside-title">Archive</p>
            </div>
            <div className="aside-items">
                <FaRegTrashAlt className="aside-icon"/>
                <p className="aside-title">Trash</p>
            </div>
        </aside>

     )
}

export { Aside };