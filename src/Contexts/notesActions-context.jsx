import { notesReducer } from "../Reducers/notesActions-reducer";

const { createContext, useContext, useReducer, useState } = require("react");

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NotesProvider = ({ children }) => {

    const [noteState, noteDispatch] = useReducer(notesReducer, { notes : [] , archives : [], date : "" });
    const [userNote, setUserNote] = useState({ title : "", content : "", date : "", flag : false, id : "" });

    return (
        <NoteContext.Provider value={{ noteState, noteDispatch, userNote, setUserNote }} >
            { children }
        </NoteContext.Provider>
    )
}

export { NotesProvider, useNote };