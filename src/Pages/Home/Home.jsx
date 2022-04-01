import "./Home.css";
import "../../components/Colors/colors.css";
import { MdOutlineLabel } from 'react-icons/md';
import { MdOutlineColorLens } from 'react-icons/md';
import { MdInvertColorsOff } from 'react-icons/md';
import { NotesCard } from "../../components/Card/NotesCard";
import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNote } from "../../Contexts/notesActions-context";
import { useAuth } from "../../Contexts/authentication-context";
import { addNote } from "../../Utilities-Functions/addNote";
import { editNote } from "../../Utilities-Functions/editNote";
import { useState } from "react/cjs/react.development";


const HomePage = () => {
    
    const { noteState, noteDispatch, userNote, setUserNote } = useNote();
    const { authState } = useAuth();
    const [colorPalate, setColorPalate] = useState(false);
    const [color, setColor] = useState("");

    const userInputsHandler = (e) => {
        setUserNote(pre => ({...pre, [e.target.name] : e.target.value, date : new Date(Date.now()).toLocaleString().split(',')[0]}))
    }

    const userColorInputHandler = (colorName) => {
        setUserNote(pre => ({...pre, color : colorName}));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        userNote.flag
        ?
            editNote(userNote, authState, noteDispatch, setUserNote)
        :
            addNote(userNote, authState, noteDispatch, setUserNote)
           
    }

    const colorPalateShow = (note) => {
        setColorPalate(pre => !pre);
    }

    
      
    return (
        <>
            <Navbar />

            <div className="notes-main-container">
                <Aside />

                <main className="notes-users-main-container">
                    <div className="outer-form-container">
                        <form  onSubmit = {(e) => submitHandler(e)} className={`users-input-container ${userNote.color}`}>
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
                                    <MdOutlineColorLens onClick={colorPalateShow} className="cursor" />
                                    <MdOutlineLabel className="mr-left cursor"/>
                                </div>

                                {
                                    userNote.flag 
                                    ?
                                    <button className="add-note-btn">Update Note</button>
                                    :
                                    <button className="add-note-btn">Add Note</button>
                                }
                                
                            </div>
                        </form>
                        {
                            colorPalate
                            &&
                            <div className="btn-forms-colors-container">
                                <button onClick={() => userColorInputHandler("")} className="btn-color "><MdInvertColorsOff className="card-tool cursor" /></button>
                                <button onClick={() => userColorInputHandler("red")} className="btn-color red"></button>
                                <button onClick={() => userColorInputHandler("orange")} className="btn-color orange"></button>
                                <button onClick={() => userColorInputHandler("yellow")} className="btn-color yellow"></button>
                                <button onClick={() => userColorInputHandler("green")} className="btn-color green"></button>
                                <button onClick={() => userColorInputHandler("teal")} className="btn-color teal"></button>
                                <button onClick={() => userColorInputHandler("purple")} className="btn-color purple"></button>
                                <button onClick={() => userColorInputHandler("pink")} className="btn-color pink"></button>
                                <button onClick={() => userColorInputHandler("brown")} className="btn-color brown"></button>
                                <button onClick={() => userColorInputHandler("grey")} className="btn-color grey"></button>
                            </div>
                        }

                        
                    </div>
                   
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