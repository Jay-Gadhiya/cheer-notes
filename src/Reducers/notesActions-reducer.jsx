
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
    
        default:
            state;
    }
}

export { notesReducer };