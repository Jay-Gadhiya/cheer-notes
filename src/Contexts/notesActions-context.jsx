import { notesReducer } from "../Reducers/notesActions-reducer";

const { createContext, useContext, useReducer, useState, useEffect } = require("react");

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NotesProvider = ({ children }) => {

    const [noteState, noteDispatch] = useReducer(notesReducer, { notes : [] , archives : [], trashNotes : [], allNotesData : [] ,date : "" });
    const [filterNote, setFilterNote] = useState({ priority:"", sortByDate: "" });
    const [userNote, setUserNote] = useState(
        { title : "", 
        content : "", 
        date : "", 
        flag : false, 
        _id : "",
        color : "",
        priority : "",
        tags : []
    });

    const [activePage, setActivePage] = useState("notes");
    const [color, setColor] = useState("");
    return (
        <NoteContext.Provider value={{ noteState, noteDispatch, userNote, setUserNote, activePage, setActivePage, color, setColor, filterNote, setFilterNote }} >
            { children }
        </NoteContext.Provider>
    )
}

export { NotesProvider, useNote };