import axios from "axios";


const addNote = async (note, authState, noteDispatch, setUserNote) => {
    console.log(note);

    try {
        const res = await axios.post("/api/notes", { note }, { headers : { authorization: authState.token } }); 
        console.log(res);

        if(res.status === 201){
            console.log(res);
            setUserNote(pre => ({ ...pre, title : "", content : "", color : "" }));
            noteDispatch({type : "ADD_NOTE", payload : res.data.notes }); 
        }
        
        
    } catch (error) {
        // return error;
        console.log(error);

    }

}

export { addNote };