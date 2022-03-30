import axios from "axios";

const deleteNote = async (item, authState, noteDispatch) => {
    try {
        const res = await axios.delete(`/api/notes/${item._id}`, { headers : { authorization: authState.token } }); 
        console.log(res);
        
        if(res.status === 200){
            noteDispatch({type : "DELETE_NOTE", payload : res.data.notes });
        }
        
        
    } catch (error) {
        return error;
    }
}

export { deleteNote };