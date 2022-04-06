
const notesReducer = (state, action) => {

    switch (action.type) {
        case "ADD_NOTE":
            return {...state, notes : action.payload, allNotesData : action.payload };
        
        case "DELETE_NOTE":
            return {...state, notes : action.payload, allNotesData : action.payload };

        case "EDIT_NOTE":
            return {...state, notes : action.payload, allNotesData : action.payload };

        case "ARCHIVE_NOTE":
            return {...state, notes : action.payload.notes, archives : action.payload.archives, allNotesData : action.payload.notes };

        case "RESTOR_ARCHIVE_NOTE":
            return {...state, notes : action.payload.notes, archives : action.payload.archives, allNotesData : action.payload.notes };

        case "DELETE_ARCHIVE_NOTE":
            return {...state, archives : action.payload };

        case "TRASH_NOTE":
            return {...state, trashNotes : [...state.trashNotes, action.payload] };

        case "RESTORE_FROM_TRASH":
            return {...state, trashNotes : state.trashNotes.filter( item => item._id !== action.payload._id) };

        case "DELETE_FROM_TRASH":
            return {...state, trashNotes : state.trashNotes.filter( item => item._id !== action.payload._id) };

        case "ADD_COLOR_ON_CARD":
            return {...state, notes : action.payload, allNotesData : action.payload };

        case "PRIORITY_HIGH":
            return {...state, notes : state.allNotesData.filter(item => item.priority === action.payload)};
        
        case "PRIORITY_MEDIUM":
        return {...state, notes : state.allNotesData.filter(item => item.priority === action.payload)};

        case "PRIORITY_LOW":
            return {...state, notes : state.allNotesData.filter(item => item.priority === action.payload)};

        case "FILTER_NEWEST_FIRST":
            console.log("new")
            return {...state, notes : state.notes.sort((a, b) => Number(b.time) - Number(a.time))};

        case "FILTER_OLDEST_FIRST":
            console.log("old")
            return {...state, notes : state.notes.sort((a, b) => a.time - b.time)};  
        
        case "CLEAR_FILTER":
            return {...state, notes : state.allNotesData};
        
    
        default:
            state;
    }
}

export { notesReducer };