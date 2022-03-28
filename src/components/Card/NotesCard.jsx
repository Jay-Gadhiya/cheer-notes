import "./NotesCard.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineModeEdit } from 'react-icons/md';

const NotesCard = () => {
    return (
        <div className="notes-card">
            <div className="notes-content">
                <div className="title-and-date-box">
                    <h3 className="card-title">Title</h3>
                    <p className="note-date">28/03/2022</p>
                </div>
                <p className="card-content">Hy this is the first note.</p>
            </div>
            <div className="cards-tools-container">
                <MdOutlineColorLens className="card-tool cursor" />
                <MdOutlineLabel className="card-tool cursor"/>
                <RiInboxArchiveLine className="card-tool cursor" />
                <FiTrash2 className="card-tool cursor "/>
                <MdOutlineModeEdit className="card-tool cursor "/>
            </div>
        </div>
    )
}

export { NotesCard };