import "../Card/NotesCard.css";
import "./ArchiveCard.css";
import { MdOutlineLabel } from 'react-icons/md';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { BiArchiveOut } from 'react-icons/bi';
import axios from "axios";
import { useAuth } from "../../Contexts/authentication-context";
import { useNote } from "../../Contexts/notesActions-context";
import { deleteNote } from "../../Utilities-Functions/deleteNote";
import { restoreFromArchive } from "../../Utilities-Functions/restorFromArchive";
import { deleteFromArchive } from "../../Utilities-Functions/deleteFromArchive";

const ArchiveCard = ({ archive }) => {

    const { authState } = useAuth();
    const { noteDispatch, userNote, setUserNote } = useNote();

    return (
        <>
            <div className={`notes-card ${archive.color}`}>
                <div className="notes-content">
                    <div className="title-and-date-box">
                        <h3 className="card-title"> {archive.title} </h3>
                        <p className="note-date"> {archive.date} </p>
                    </div>
                    <p className="card-content" > {archive.content} </p>
                </div>
                <div className="cards-tools-container">
                    <MdOutlineColorLens className="card-tool cursor" />
                    <MdOutlineLabel className="card-tool cursor"/>
                    <BiArchiveOut onClick={() => restoreFromArchive(archive, authState, noteDispatch)} className="card-tool cursor" />
                    <FiTrash2 onClick={() => deleteFromArchive(archive, authState, noteDispatch)} className="card-tool cursor "/>
                </div>
            </div>
        </>
    )
}

export { ArchiveCard };