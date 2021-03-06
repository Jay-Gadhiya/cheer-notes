import axios from "axios";

const deleteNote = async (item, authState, noteDispatch, setUserNote, setFilterNote) => {
    try {
        const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization: authState.token } }); 
        
        if(res.status === 200){

            noteDispatch({type : "DELETE_NOTE", payload : res.data.notes });
            noteDispatch({type : "TRASH_NOTE", payload : item});
            setUserNote(pre => ({ ...pre, title : "", content : "", flag : false }));
            setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));
            noteDispatch({ type: "CLEAR_FILTER" });

        }
        
        
    } catch (error) {
        return error;
    }
}

export { deleteNote };