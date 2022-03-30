import axios from "axios";

const deleteNote = async (item, authState, noteDispatch) => {
    try {
        const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization: authState.token } }); 
        
        if(res.status === 201){
            noteDispatch({type : "DELETE_NOTE", payload : res.data.notes });
        }
        
        
    } catch (error) {
        return error;
    }
}

export { deleteNote };