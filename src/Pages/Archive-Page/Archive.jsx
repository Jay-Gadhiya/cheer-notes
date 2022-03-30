import { ArchiveCard } from "../../components/Archive-Card/ArchiveCard";
import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNote } from "../../Contexts/notesActions-context";
import "../Home/Home.css";

const Archive = () => {

    const { noteState } = useNote();

    return (
        <>
        <Navbar />

        <div className="notes-main-container">
            <Aside />

            <main className="notes-users-main-container">
              
                <h2 className="archives-heading">Archives</h2>
                <hr className="line-breack" />
            
                <div className="notes-cards-container">
                    
                    {
                        noteState.archives.map( item => <ArchiveCard key={item._id} archive = {item} /> )
                        
                    }
                    
                </div>
            </main>
        </div>
    </>
    )
}
export { Archive };