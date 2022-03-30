import "../Card/NotesCard.css";
import "./ArchiveCard.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { BiArchiveOut } from 'react-icons/bi';
import axios from "axios";

const ArchiveCard = () => {

    return (
        <>
            <div className="notes-card">
                <div className="notes-content">
                    <div className="title-and-date-box">
                        <h3 className="card-title"> title </h3>
                        <p className="note-date"> date </p>
                    </div>
                    <p className="card-content" > content </p>
                </div>
                <div className="cards-tools-container">
                    <MdOutlineColorLens className="card-tool cursor" />
                    <MdOutlineLabel className="card-tool cursor"/>
                    <BiArchiveOut className="card-tool cursor" />
                    <FiTrash2  className="card-tool cursor "/>
                </div>
            </div>
        </>
    )
}

export { ArchiveCard };