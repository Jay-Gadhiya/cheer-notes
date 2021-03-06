import axios from "axios";

const archiveNotes =  async (note, authState, noteDispatch, setUserNote, setFilterNote) => {

    try {
        const res = await axios.post(`/api/notes/archives/${note._id}`, { note }, { headers : { authorization: authState.token } }); 
        
        if(res.status === 201){
            noteDispatch({type : "ARCHIVE_NOTE", payload : res.data });
            setUserNote(pre => ({ ...pre, title : "", content : "", flag : false }));
            setFilterNote(pre => ({...pre, priority : "", sortByDate : ""}));
            noteDispatch({ type: "CLEAR_FILTER" });
        }
        
    } catch (error) {
        return error;
    }

}

export { archiveNotes };