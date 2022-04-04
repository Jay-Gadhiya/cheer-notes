import axios from "axios";

const editNote = async (note, authState, noteDispatch, setUserNote) => {
    
    try {
        const res = await axios.post(`/api/notes/${note._id}`, { note }, { headers : { authorization: authState.token } });
        console.log(res.data.notes);
        if(res.status === 201) {
            noteDispatch({type : "EDIT_NOTE", payload : res.data.notes });
            setUserNote(pre => ({ ...pre, title : "", content : "", color : "",flag : false, tags : [] }));
        }
        
    } catch (error) {
        return error;
    
    }
}

export { editNote};
