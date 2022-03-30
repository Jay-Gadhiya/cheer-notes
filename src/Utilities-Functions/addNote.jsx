import axios from "axios";


const addNote = async (e, note, authState, noteDispatch, setUserNote) => {
    e.preventDefault();

    try {
        const res = await axios.post("/api/notes", { note }, { headers : { authorization: authState.token } }); 
        
        if(res.status === 201){
            setUserNote(pre => ({ ...pre, title : "", content : "" }));
            noteDispatch({type : "ADD_NOTE", payload : res.data.notes });
        }
        
        
    } catch (error) {
        return error;
    }

}

export { addNote };