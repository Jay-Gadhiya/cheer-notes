import "./NotesCard.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineModeEdit } from 'react-icons/md';
import axios from "axios";
import { useAuth } from "../../Contexts/authentication-context";
import { useNote } from "../../Contexts/notesActions-context";
import { deleteNote } from "../../Utilities-Functions/deleteNote";
import { archiveNotes } from "../../Utilities-Functions/archiveNote";

const NotesCard = ({ note }) => {

    const { authState } = useAuth();
    const { noteDispatch, userNote, setUserNote, deletedNotes, setDeletedNotes } = useNote();

    const changeInputs = async (note) => {
        setUserNote(pre => ({...pre, title : note.title, content : note.content , flag : true, id : note._id , date : new Date(Date.now()).toLocaleString().split(',')[0]}));
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
                <MdOutlineColorLens className="card-tool cursor" />
                <MdOutlineLabel className="card-tool cursor"/>
                <RiInboxArchiveLine onClick={() => archiveNotes(note, authState, noteDispatch)} className="card-tool cursor" />
                <FiTrash2 onClick={() => deleteNote(note, authState, noteDispatch)} className="card-tool cursor "/>
                <MdOutlineModeEdit onClick={() => changeInputs(note)} className="card-tool cursor "/>
            </div>
        </div>
    )
}

export { NotesCard };