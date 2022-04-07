import axios from "axios";


const addNote = async (note, authState, noteDispatch, setUserNote) => {

    try {
        const res = await axios.post("/api/notes", { note }, { headers : { authorization: authState.token } }); 
        if(res.status === 201){
            console.log(res);
            setUserNote(pre => ({ ...pre, title : "", content : "", color : "" }));
            noteDispatch({type : "ADD_NOTE", payload : res.data.notes }); 
        }
        
        
    } catch (error) {
        return error;
    }

}

export { addNote };