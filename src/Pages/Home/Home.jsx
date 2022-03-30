import "./Home.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlineColorLens } from 'react-icons/md';
import { NotesCard } from "../../components/Card/NotesCard";
import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import axios from "axios";
import { useNote } from "../../Contexts/notesActions-context";
import { useState } from "react";
import { useAuth } from "../../Contexts/authentication-context";
import { addNote } from "../../Utilities-Functions/addNote";


const HomePage = () => {
    
    const { noteState, noteDispatch } = useNote();
    const { authState } = useAuth();
    const [userNote, setUserNote] = useState({ title : "", content : "", date : "" });

    const userInputsHandler = (e) => {
        setUserNote(pre => ({...pre, [e.target.name] : e.target.value, date : new Date(Date.now()).toLocaleString().split(',')[0]}))
    }
     
    return (
        <>
            <Navbar />

            <div className="notes-main-container">
                <Aside />

                <main className="notes-users-main-container">
                    <form onSubmit = {(e) => addNote(e, userNote, authState, noteDispatch, setUserNote)} className="users-input-container">
                        <input 
                        className="users-title-input" 
                        placeholder="Title" type="text" 
                        name="title"
                        onChange={userInputsHandler}
                        value = {userNote.title}
                        required
                        />
                        <textarea 
                        className="user-notes-input" 
                        rows="3" 
                        cols="50" 
                        placeholder="Write your note" 
                        type="text" 
                        name="content"
                        onChange={userInputsHandler}
                        value = {userNote.content}
                        required
                        >
                        </textarea>
                        <div className="tools-container">
                            <div className="tools">
                                <MdOutlineColorLens className="cursor" />
                                <MdOutlineLabel className="mr-left cursor"/>
                                <RiInboxArchiveLine className="mr-left cursor" />
                            </div>
                            <button className="add-note-btn">Add</button>
                        </div>
                    </form>

                    <div className="notes-cards-container">
                        {
                            noteState.notes.map( item => <NotesCard key={item._id} note = {item} /> )
                        }
                        
                    </div>
                </main>
            </div>
        </>
    )
}

export { HomePage };