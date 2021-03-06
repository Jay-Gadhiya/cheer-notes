import "../Card/NotesCard.css";
import { FaTrash } from 'react-icons/fa';
import { MdRestoreFromTrash } from 'react-icons/md';
import { FaTrashRestoreAlt } from 'react-icons/fa';
import { useNote } from "../../Contexts/notesActions-context";
import { addNote } from "../../Utilities-Functions/addNote";
import { useAuth } from "../../Contexts/authentication-context";
import { useTheme } from "../../Contexts/themeContext";


const TrashCard = ({note}) => {

    const { noteState, noteDispatch, setUserNote } = useNote();
    const { authState } = useAuth();
    const { theme } = useTheme();

    const restorFromTrash = (item) => {
        addNote(item, authState, noteDispatch, setUserNote);
        noteDispatch({ type : "RESTORE_FROM_TRASH", payload : item });
    }

    const deleteFromTrash = (item) => {
        noteDispatch({ type : "DELETE_FROM_TRASH", payload : item });
    }

    return (
        <div className={`notes-card ${note.color} ${!note.color && (theme === "dark" ? "white" : "")} `}>
            <div className="notes-content">
                <div className="title-and-date-box">
                    <h3 className="card-title"> {note.title} </h3>
                    <div className="date-and-priority-box">
                        <p className={`priority-tag ${note.priority && note.priority}`}>{note.priority}</p>
                        <p className="note-date"> {note.date} </p>
                    </div>
                </div>
                <div className="card-content" dangerouslySetInnerHTML={{ __html: note.content}} /> 
            </div>
            <div className="tag-chips">
                {
                    note.tags.map( item => (
                        <span key={item} className="chip">{item}</span>
                    ))
                }
            </div>
            <div className="cards-tools-container">
                <FaTrash onClick={() => deleteFromTrash(note)} className="card-tool cursor"/>
                <FaTrashRestoreAlt onClick={() => restorFromTrash(note)} className="card-tool cursor" />
            </div>
        </div>
    )
}

export { TrashCard };