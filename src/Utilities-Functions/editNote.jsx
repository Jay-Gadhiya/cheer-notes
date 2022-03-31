import axios from "axios";

const editNote = async (note, authState, noteDispatch, setUserNote) => {
    
    try {
        const res = await axios.post(`/api/notes/${note.id}`, { note }, { headers : { authorization: authState.token } }); 

        if(res.status === 201) {
            noteDispatch({type : "EDIT_NOTE", payload : res.data.notes });
            setUserNote(pre => ({ ...pre, title : "", content : "", flag : false }));
        }
        
    } catch (error) {
        return error;
       
    }
}

export { editNote};