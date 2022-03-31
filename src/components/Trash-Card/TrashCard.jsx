import "../Card/NotesCard.css";
import { FaTrash } from 'react-icons/fa';
import { MdRestoreFromTrash } from 'react-icons/md';
import { FaTrashRestoreAlt } from 'react-icons/fa';
import { useNote } from "../../Contexts/notesActions-context";
import { addNote } from "../../Utilities-Functions/addNote";
import { useAuth } from "../../Contexts/authentication-context";


const TrashCard = ({note}) => {

    const { noteState, noteDispatch, setUserNote } = useNote();
    const { authState } = useAuth();

    const restorFromTrash = (item) => {
        addNote(item, authState, noteDispatch, setUserNote);
        noteDispatch({ type : "RESTORE_FROM_TRASH", payload : item });
    }

    const deleteFromTrash = (item) => {
        noteDispatch({ type : "DELETE_FROM_TRASH", payload : item });
    }

    return (
        <div className="notes-card">
            <div className="notes-content">
                <div className="title-and-date-box">
                    <h3 className="card-title"> {note.title} </h3>
                    <p className="note-date"> {note.date} </p>
                </div>
                <p className="card-content" > {note.content} </p>
            </div>
            <div className="cards-tools-container">
                <FaTrash onClick={() => deleteFromTrash(note)} className="card-tool cursor"/>
                <FaTrashRestoreAlt onClick={() => restorFromTrash(note)} className="card-tool cursor" />
            </div>
        </div>
    )
}

export { TrashCard };