import axios from "axios";

const deleteFromArchive = async (item, authState, noteDispatch) => {
    try {
        const res = await axios.delete(`/api/archives/delete/${item._id}`, { headers : { authorization: authState.token } }); 
       
        if(res.status === 200){
            noteDispatch({type : "DELETE_ARCHIVE_NOTE", payload : res.data.archives });
            noteDispatch({type : "TRASH_NOTE", payload : item});
        }
        
    } catch (error) {
        return error;
    }
}

export { deleteFromArchive };