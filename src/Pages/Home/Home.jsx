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
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export const HomePage = () => {
    
    const { noteState, noteDispatch, userNote, setUserNote } = useNote();
    const { authState } = useAuth();
    const [colorPalate, setColorPalate] = useState(false);
    const editorStyle = {
        height: 150
    }
    // console.log("home", userNote);

    // const userColorInputHandler = (colorName) => {
    //     setUserNote(pre => ({...pre, color : colorName}));
    // }

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

    const userInputsHandler = (e) => {
        setUserNote(pre => ({...pre, title : e.target.value, date : new Date(Date.now()).toLocaleString().split(',')[0]}))
    }

    const quillHander = (e) => {
        setUserNote(pre => ({...pre, content : e}))
    }

   

    return (
        <>
            <Navbar />

            <div className="notes-main-container">
                <Aside />

                <main className="notes-users-main-container">
                    <form onSubmit = {(e) => submitHandler(e)} className={`quill-container ${userNote.color}`}>

                        <div className="title-box">
                            {/* <label className="label-title" htmlFor="title">Title</label> */}
                            <input 
                                name="title"
                                type="text" 
                                className="users-title-input" 
                                placeholder="write title" 
                                value={userNote.title}
                                // onChange={e => setUserNote({...userNote, title : e.target.value})}
                                onChange={userInputsHandler}
                            />
                        </div>

                        {/* <label className="label-content" htmlFor="content">Description</label> */}
                        <ReactQuill 
                            className="quill-editor"
                            value={userNote.content}
                            // onChange={e => setUserNote({...userNote, content : e})}
                            onChange={e => quillHander(e)}
                            style={editorStyle}  
                        />

                        <div className="tools-container">
                            <div className="tools">
                                <MdOutlineColorLens onClick={colorPalateShow} className="cursor" />
                                <MdOutlineLabel className="mr-left cursor"/>
                            </div>

                            {
                                userNote.flag 
                                ?
                                <button className="btn btn-primary add-note-btn">Update Note</button>
                                :
                                <button className="btn btn-primary add-note-btn">Add Note</button>
                            }
                            
                        </div>
                    </form>


                    {/* <div className="outer-form-container">
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
                                , date : new Date(Date.now()).toLocaleString().split(',')[0]
                            </div>
                        }

                        
                    </div>*/}
                   
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
