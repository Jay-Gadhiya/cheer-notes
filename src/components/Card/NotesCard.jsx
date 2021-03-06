import "./NotesCard.css";
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdInvertColorsOff } from 'react-icons/md';
import { useAuth } from "../../Contexts/authentication-context";
import { useNote } from "../../Contexts/notesActions-context";
import { deleteNote } from "../../Utilities-Functions/deleteNote";
import { archiveNotes } from "../../Utilities-Functions/archiveNote";
import { editNote } from "../../Utilities-Functions/editNote";
import { useState } from "react";
import { deleteChip } from "../../Utilities-Functions/deleteChip";
import { useClickOutside } from "../../Utilities-Functions/useClickOutside";
import { useTheme } from "../../Contexts/themeContext";

const NotesCard = ({ note }) => {

    const { authState } = useAuth();
    const { noteDispatch, setUserNote, setFilterNote, filterNote } = useNote();
    const [colorPalate, setColorPalate] = useState(false);
    const [tagBox, setTagBox] = useState(false);
    const { theme } = useTheme();
    let itemTags = [...note.tags];
    let tempTag = "";

    const colorPalateRef = useClickOutside(() => {
        setColorPalate(false);
    });

    const tagBoxRef = useClickOutside(() => {
        setTagBox(false);
    });

    const changeInputs = (note) => {
        console.log("note", note);
        setUserNote(pre => ({...pre, title : note.title, content : note.content , flag : true, _id : note._id , color : note.color, tags : note.tags , time : note.time ,date : new Date(Date.now()).toLocaleString()}));
        setFilterNote(pre => ({...pre, priority : ""}));
        noteDispatch({ type: "CLEAR_FILTER" });
        setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));
    }

    const applyColorOnCard = (colorName, note) => {
       const addedColorItem = {...note, color : colorName};
       editNote(addedColorItem, authState, noteDispatch);
       noteDispatch({ type: "CLEAR_FILTER" });
       setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));
    }

    const addInputTagValue = (e) => {
        tempTag = e.target.value;
    }

    const addTagsInArray = (tag) => {
      
      if(itemTags.find(item => item === tag)) {
        itemTags = itemTags.filter(item => item !== tag);   
      }
      else {
        itemTags.push(tag);
      }

    }

    const addTagsOnCard = () => {

        tempTag && itemTags.push(tempTag);

        const addedTags = {...note, tags:itemTags};
        editNote(addedTags, authState, noteDispatch);
        setTagBox(pre => !pre);
        noteDispatch({ type: "CLEAR_FILTER" });
        setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));

    }

    const priorityAdd = (e) => {
        const addedPriority = {...note, priority:e.target.value};
        editNote(addedPriority, authState, noteDispatch);
        noteDispatch({ type: "CLEAR_FILTER" });
        setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));
    }

    return (
        <div className={`notes-card ${note.color} ${!note.color && (theme === "dark" ? "white" : "")} `}>
            <div className="notes-content" >
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
                        
                        <div key={item} className="chip">
                            <span >{item} </span> 
                            <span onClick={() => deleteChip(item, note, authState, noteDispatch, setUserNote)} className="delete-chip">&times;</span>
                        </div>
                        
                    ))
                }
                
            </div>
            <div className="cards-tools-container">
                <div ref={colorPalateRef} className="color-container">
                    <MdOutlineColorLens onClick={() => setColorPalate((isOpen) => !isOpen)} className="card-tool cursor" />
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
                <div ref={tagBoxRef}  className="tag-container">
                    <MdOutlineLabel  onClick={() => setTagBox((pre) => !pre)} className="card-tool cursor"/>

                    {
                        tagBox
                        &&
                        <div className="tag-outer-container">
                            <div className="tags-selection-container">
                                <div className="tag-box">
                                    <div className="tag">
                                        <input 
                                        name="work" 
                                        type="checkbox"
                                        onClick={() => addTagsInArray("work")}
                                        checked={note.tags.find(item => item === "work")}
                                        />
                                        <label htmlFor="work">Work</label>
                                    </div>
                                    <div className="tag">
                                        <input 
                                        name="health" 
                                        type="checkbox"
                                        onClick={() => addTagsInArray("health")}
                                        checked={note.tags.find(item => item === "health")}
                                         />
                                        <label htmlFor="health">Health</label>
                                    </div>
                                    <div className="tag">
                                        <input 
                                        name="creativity" 
                                        type="checkbox"
                                        onClick={() => addTagsInArray("creativity")}
                                        checked={note.tags.find(item => item === "creativity")}
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
                                        checked={note.tags.find(item => item === "exercise")}
                                         />
                                        <label htmlFor="exercise">Exercise</label>                           
                                    </div>
                                    <div className="tag">
                                        <input 
                                        name="chores" 
                                        type="checkbox"
                                        onClick={() => addTagsInArray("chores")}
                                        checked={note.tags.find(item => item === "chores")}
                                         />
                                        <label htmlFor="chores">Chores</label>
                                    </div>
                                    <div className="tag">
                                        <input 
                                        name="study" 
                                        type="checkbox"
                                        onClick={() => addTagsInArray("study")}
                                        checked={note.tags.find(item => item === "study")}
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
                            <button onClick={addTagsOnCard} className="btn btn-primary-outline">Add Tags</button>
                        </div>
                    }
                
                </div>
                <RiInboxArchiveLine onClick={() => archiveNotes(note, authState, noteDispatch, setUserNote, setFilterNote)} className="card-tool cursor" />
                <FiTrash2 onClick={() => deleteNote(note, authState, noteDispatch, setUserNote, setFilterNote)} className="card-tool cursor "/>
                <MdOutlineModeEdit onClick={() => changeInputs(note)} className="card-tool cursor "/>
                <select className="prio" onChange={(e) => priorityAdd(e)} id="Priority" value={note.priority} >
                    <option value="">Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </div>
    )
}

export { NotesCard };