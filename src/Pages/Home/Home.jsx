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
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useClickOutside } from "../../Utilities-Functions/useClickOutside";
import { useTheme } from "../../Contexts/themeContext";

export const HomePage = () => {
    
    const { noteState, noteDispatch, userNote, setUserNote } = useNote();
    const { authState } = useAuth();
    const [colorPalate, setColorPalate] = useState(false);
    const [tagBox, setTagBox] = useState(false);
    const { theme, setTheme } = useTheme();
    const d = new Date();
    const time = d.getTime();
    let itemTags = [...userNote.tags];
    let tempTag = "";

    const colorPalateRef = useClickOutside(() => {
        setColorPalate(false);
    });

    const tagBoxRef = useClickOutside(() => {
        setTagBox(false);
    });

    const userColorInputHandler = (colorName) => {
        setUserNote(pre => ({...pre, color : colorName}));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(colorPalate === false) {
            userNote.flag
            ?
                editNote(userNote, authState, noteDispatch, setUserNote)
            :
                addNote(userNote, authState, noteDispatch, setUserNote)
        }
        
           
    }

    const userInputsHandler = (e) => {
        setUserNote(pre => ({...pre, title : e.target.value, time : time ,date : new Date(Date.now()).toLocaleString()}));
    }

    const quillHander = (e) => {
        setUserNote(pre => ({...pre, content : e}))
    }


    const addTagsInArray = (tag) => {
      
        if(itemTags.find(item => item === tag)) {
          itemTags = itemTags.filter(item => item !== tag);   
        }
        else {
          itemTags.push(tag);
        }
  
      }

    const addInputTagValue = (e) => {
        tempTag = e.target.value;
    }

    const addTagsOnCard = () => {

        tempTag && itemTags.push(tempTag);

        setUserNote(pre => ({...pre, tags : itemTags}))
        setTagBox(pre => !pre);
    }
   

    return (
        <>
            <Navbar />

            <div className="notes-main-container">
                <Aside />

                <main className={`notes-users-main-container  ${theme === "dark" ? "dark-bg" : ""} `}>
                    <form onSubmit = {(e) => submitHandler(e)} className={`quill-container`}>

                        <div className="title-box">
                            <input 
                                name="title"
                                type="text" 
                                className="users-title-input" 
                                placeholder="title" 
                                value={userNote.title}
                                onChange={userInputsHandler}
                                required
                            />
                        </div>

                        <ReactQuill 
                            className={`quill-editor ${userNote.color} ${!userNote.color && (theme === "dark" ? "white" : "")} `}
                            value={userNote.content}
                            onChange={e => quillHander(e)}
                            placeholder={"Write awsome note"}
                        />
                    

                    <div className="tools-container">
                            <div className="tools">
                                <div ref={colorPalateRef} className="outer-form-container">
                                    <MdOutlineColorLens  onClick={() => setColorPalate((isOpen) => !isOpen)} className= {`cursor ${theme === "dark" ? "color-fff" : ""}`} />
                                    {
                                        colorPalate
                                        &&
                                        <div  className="btn-forms-colors-container">
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

                                <div ref={tagBoxRef} className="tag-container-home">
                                    <MdOutlineLabel onClick={() => setTagBox((isOpen) => !isOpen)} className={`mr-left cursor ${theme === "dark" ? "color-fff" : ""}`}/>

                                    {
                                        tagBox
                                        &&
                                        <div  className="tag-outer-container-home">
                                            <div className="tags-selection-container-home">
                                                <div className="tag-box">
                                                    <div className="tag">
                                                        <input 
                                                        name="work" 
                                                        type="checkbox"
                                                        onClick={() => addTagsInArray("work")}
                                                        checked={userNote.tags.find(item => item === "work")}
                                                        />
                                                        <label htmlFor="work">Work</label>
                                                    </div>
                                                    <div className="tag">
                                                        <input 
                                                        name="health" 
                                                        type="checkbox"
                                                        onClick={() => addTagsInArray("health")}
                                                        checked={userNote.tags.find(item => item === "health")}
                                                        />
                                                        <label htmlFor="health">Health</label>
                                                    </div>
                                                    <div className="tag">
                                                        <input 
                                                        name="creativity" 
                                                        type="checkbox"
                                                        onClick={() => addTagsInArray("creativity")}
                                                        checked={userNote.tags.find(item => item === "creativity")}
                                                        />
                                                        <label htmlFor="creativity">Creativity</label>
                                                    </div>
                                                </div>

                                                <div className="tag-box">
                                                    <div className="tag">
                                                        <input 
                                                        name="exercise" 
                                                        type="checkbox"
                                                        onClick={() => addTagsInArray("exercise")}
                                                        checked={userNote.tags.find(item => item === "exercise")}
                                                        />
                                                        <label htmlFor="exercise">Exercise</label>                           
                                                    </div>
                                                    <div className="tag">
                                                        <input 
                                                        name="chores" 
                                                        type="checkbox"
                                                        onClick={() => addTagsInArray("chores")}
                                                        checked={userNote.tags.find(item => item === "chores")}
                                                        />
                                                        <label htmlFor="chores">Chores</label>
                                                    </div>
                                                    <div className="tag">
                                                        <input 
                                                        name="study" 
                                                        type="checkbox"
                                                        onClick={() => addTagsInArray("study")}
                                                        checked={userNote.tags.find(item => item === "study")}
                                                        />
                                                        <label htmlFor="teams">Study</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <input 
                                            className="user-input-tag" 
                                            placeholder="Add New Tag" 
                                            type="text"
                                            onChange={addInputTagValue}
                                            />
                                            <button onClick={() => addTagsOnCard()}  className="btn btn-primary-outline">Add Tags</button>
                                        </div>
                                    }
                                </div>

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
