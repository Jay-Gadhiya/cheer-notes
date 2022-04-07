import "../Card/NotesCard.css";
import "./ArchiveCard.css";
import { FiTrash2 } from 'react-icons/fi';
import { BiArchiveOut } from 'react-icons/bi';
import axios from "axios";
import { useAuth } from "../../Contexts/authentication-context";
import { useNote } from "../../Contexts/notesActions-context";
import { deleteNote } from "../../Utilities-Functions/deleteNote";
import { restoreFromArchive } from "../../Utilities-Functions/restorFromArchive";
import { deleteFromArchive } from "../../Utilities-Functions/deleteFromArchive";
import { useTheme } from "../../Contexts/themeContext";

const ArchiveCard = ({ archive }) => {

    const { authState } = useAuth();
    const { noteDispatch, userNote, setUserNote } = useNote();
    const { theme } = useTheme();

    return (
        <>
            <div className={`notes-card ${archive.color} ${!archive.color && (theme === "dark" ? "white" : "")} `}>
                <div className="notes-content">
                    <div className="title-and-date-box">
                        <h3 className="card-title"> {archive.title} </h3>
                        <div className="date-and-priority-box">
                            <p className={`priority-tag ${archive.priority && archive.priority}`}>{archive.priority}</p>
                            <p className="note-date"> {archive.date} </p>
                        </div>
                    </div>
                    <div className="card-content" dangerouslySetInnerHTML={{ __html: archive.content}} /> 
                </div>
                <div className="tag-chips">
                {
                    archive.tags.map( item => (
                        <span key={item} className="chip">{item}</span>
                    ))
                }
            </div>
                <div className="cards-tools-container">
                    <BiArchiveOut onClick={() => restoreFromArchive(archive, authState, noteDispatch)} className="card-tool cursor" />
                    <FiTrash2 onClick={() => deleteFromArchive(archive, authState, noteDispatch)} className="card-tool cursor "/>
                </div>
            </div>
        </>
    )
}

export { ArchiveCard };