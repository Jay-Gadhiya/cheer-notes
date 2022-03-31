import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import { TrashCard } from "../../components/Trash-Card/TrashCard";
import { useNote } from "../../Contexts/notesActions-context";
import "../Home/Home.css";
import "../Archive-Page/Archive.css";

const TrashPage = () => {

    const { noteState } = useNote();

    return (
        <>
            <Navbar />

            <div className="notes-main-container">
                <Aside />

                <main className="notes-users-main-container">

                    <h2 className="archives-heading">Trash</h2>
                    <hr className="line-breack" />
                   
                    <div className="notes-cards-container">
                        
                        {
                            noteState.trashNotes.map( item => <TrashCard key={item._id} note = {item} /> )
                        }
                        
                    </div>
                </main>
            </div>
        </>
    )
}

export { TrashPage };