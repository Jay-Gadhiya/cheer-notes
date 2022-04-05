import { editNote } from "./editNote";


 const deleteChip = (chip, note, authState, noteDispatch, setUserNote) => {

    const deletedChip = note.tags.filter( item => item !== chip);
    const newData = {...note, tags: deletedChip};
    editNote(newData, authState, noteDispatch, setUserNote);
}

export { deleteChip };