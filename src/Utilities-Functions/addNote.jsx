import axios from "axios";


const addNote = async (note, authState, noteDispatch, setUserNote) => {
    try {
        const res = await axios.post("/api/notes", { note }, { headers : { authorization: authState.token } }); 
        setUserNote(pre => ({ ...pre, title : "", content : "" }));
        noteDispatch({type : "ADD_NOTE", payload : res.data.notes });
        console.log(res);
        
    } catch (error) {
        console.log(err);
    }
}

export { addNote };