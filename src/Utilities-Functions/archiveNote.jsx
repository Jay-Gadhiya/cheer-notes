import axios from "axios";

const archiveNotes =  async (note, authState, noteDispatch, setUserNote) => {

    try {
        const res = await axios.post(`/api/notes/archives/${note._id}`, { note }, { headers : { authorization: authState.token } }); 
        
        if(res.status === 201){
            noteDispatch({type : "ARCHIVE_NOTE", payload : res.data });
            setUserNote(pre => ({ ...pre, title : "", content : "", flag : false }));
        }
        
    } catch (error) {
        return error;
    }

}

export { archiveNotes };