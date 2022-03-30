import { ArchiveCard } from "../../components/Archive-Card/ArchiveCard";
import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import "../Home/Home.css";

const Archive = () => {

    return (
        <>
        <Navbar />

        <div className="notes-main-container">
            <Aside />

            <main className="notes-users-main-container">
                <div className="notes-cards-container">
                    <ArchiveCard />
                    <ArchiveCard />
                    <ArchiveCard />
                    <ArchiveCard />
                    
                    {/* {
                        noteState.notes.map( item => <NotesCard key={item._id} note = {item} /> )
                    } */}
                    
                </div>
            </main>
        </div>
    </>
    )
}
export { Archive };