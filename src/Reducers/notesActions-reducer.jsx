
const notesReducer = (state, action) => {
    
    switch (action.type) {
        case "ADD_NOTE":
            return {...state, notes : action.payload };
        
        case "DELETE_NOTE":
            return {...state, notes : action.payload };

        case "EDIT_NOTE":
            return {...state, notes : action.payload };

        case "ARCHIVE_NOTE":
            return {...state, notes : action.payload.notes, archives : action.payload.archives };

        case "RESTOR_ARCHIVE_NOTE":
            return {...state, notes : action.payload.notes, archives : action.payload.archives };

        case "DELETE_ARCHIVE_NOTE":
            return {...state, archives : action.payload };

        case "TRASH_NOTE":
            return {...state, trashNotes : [...state.trashNotes, action.payload] };

        case "RESTORE_FROM_TRASH":
            return {...state, trashNotes : state.trashNotes.filter( item => item._id !== action.payload._id) };

        case "DELETE_FROM_TRASH":
            return {...state, trashNotes : state.trashNotes.filter( item => item._id !== action.payload._id) };

        case "ADD_COLOR_ON_CARD":
            return {...state, notes : action.payload };
        
    
        default:
            state;
    }
}

export { notesReducer };