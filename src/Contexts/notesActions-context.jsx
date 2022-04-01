import { notesReducer } from "../Reducers/notesActions-reducer";

const { createContext, useContext, useReducer, useState } = require("react");

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NotesProvider = ({ children }) => {

    const [noteState, noteDispatch] = useReducer(notesReducer, { notes : [] , archives : [], trashNotes : [] ,date : "" });
    const [userNote, setUserNote] = useState(
        { title : "", 
        content : "", 
        date : "", 
        flag : false, 
        id : "",
        color : ""
    });
    const [activePage, setActivePage] = useState("notes");
    const [color, setColor] = useState("");
    console.log(userNote);

    return (
        <NoteContext.Provider value={{ noteState, noteDispatch, userNote, setUserNote, activePage, setActivePage, color, setColor }} >
            { children }
        </NoteContext.Provider>
    )
}

export { NotesProvider, useNote };