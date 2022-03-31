import axios from "axios";

const restoreFromArchive = async (item, authState, noteDispatch) => {
    try {
        const res = await axios.post(`/api/archives/restore/${item._id}`, {}, { headers : { authorization: authState.token } }); 

        if(res.status === 200){
            noteDispatch({type : "RESTOR_ARCHIVE_NOTE", payload : res.data });
        }
        
    } catch (error) {
        return error;
    }
}

export { restoreFromArchive };