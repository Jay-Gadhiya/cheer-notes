import { notesReducer } from "../Reducers/notesActions-reducer";

const { createContext, useContext, useReducer } = require("react");

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NotesProvider = ({ children }) => {

    const [noteState, noteDispatch] = useReducer(notesReducer, { notes : [] , date : "" });

    return (
        <NoteContext.Provider value={{ noteState, noteDispatch }} >
            { children }
        </NoteContext.Provider>
    )
}

export { NotesProvider, useNote };