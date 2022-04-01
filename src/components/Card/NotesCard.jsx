import "./NotesCard.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdInvertColorsOff } from 'react-icons/md';
import axios from "axios";
import { useAuth } from "../../Contexts/authentication-context";
import { useNote } from "../../Contexts/notesActions-context";
import { deleteNote } from "../../Utilities-Functions/deleteNote";
import { archiveNotes } from "../../Utilities-Functions/archiveNote";
import { editNote } from "../../Utilities-Functions/editNote";
import { useState } from "react/cjs/react.development";

const NotesCard = ({ note }) => {

    const { authState } = useAuth();
    const { noteDispatch, setUserNote, color, setColor } = useNote();
    const [colorPalate, setColorPalate] = useState(false);

    const changeInputs = async (note) => {
        setUserNote(pre => ({...pre, title : note.title, content : note.content , flag : true, _id : note._id , color : note.color, date : new Date(Date.now()).toLocaleString().split(',')[0]}));
    }

    const applyColorOnCard = (colorName, note) => {
       const addedColorItem = {...note, color : colorName};
       editNote(addedColorItem, authState, noteDispatch, setUserNote);
    }

    const colorPalateShow = (note) => {
        setColorPalate(pre => !pre);
    }

    return (
        <div className={`notes-card ${note.color}`}>
            <div className="notes-content">
                <div className="title-and-date-box">
                    <h3 className="card-title"> {note.title} </h3>
                    <p className="note-date"> {note.date} </p>
                </div>
                <p className="card-content" > {note.content} </p>
            </div>
            <div className="cards-tools-container">
                <div className="color-container">
                    <MdOutlineColorLens onClick={() => colorPalateShow(note)} className="card-tool cursor" />
                    {
                        colorPalate 
                        && 
                        <div className="btn-colors-container">
                            <button onClick={() => applyColorOnCard("", note)} className="btn-color "><MdInvertColorsOff className="card-tool cursor" /></button>
                            <button onClick={() => applyColorOnCard("red", note)} className="btn-color red"></button>
                            <button onClick={() => applyColorOnCard("orange", note)} className="btn-color orange"></button>
                            <button onClick={() => applyColorOnCard("yellow", note)} className="btn-color yellow"></button>
                            <button onClick={() => applyColorOnCard("green", note)} className="btn-color green"></button>
                            <button onClick={() => applyColorOnCard("teal", note)} className="btn-color teal"></button>
                            <button onClick={() => applyColorOnCard("purple", note)} className="btn-color purple"></button>
                            <button onClick={() => applyColorOnCard("pink", note)} className="btn-color pink"></button>
                            <button onClick={() => applyColorOnCard("brown", note)} className="btn-color brown"></button>
                            <button onClick={() => applyColorOnCard("grey", note)} className="btn-color grey"></button>
                        </div>
                    }
                    
                </div>
                <MdOutlineLabel className="card-tool cursor"/>
                <RiInboxArchiveLine onClick={() => archiveNotes(note, authState, noteDispatch, setUserNote)} className="card-tool cursor" />
                <FiTrash2 onClick={() => deleteNote(note, authState, noteDispatch, setUserNote)} className="card-tool cursor "/>
                <MdOutlineModeEdit onClick={() => changeInputs(note)} className="card-tool cursor "/>
            </div>
        </div>
    )
}

export { NotesCard };