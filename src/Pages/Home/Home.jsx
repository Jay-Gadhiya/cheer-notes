import "./Home.css";
import { CgNotes } from 'react-icons/cg';
import { MdOutlineLabel } from 'react-icons/md';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineColorLens } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineModeEdit } from 'react-icons/md';
import { NotesCard } from "../../components/Card/NotesCard";
import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";


const HomePage = () => {
    
    return (
        <>
            <Navbar />

            <div className="notes-main-container">
                <Aside />

                <main className="notes-users-main-container">
                    <div className="users-input-container">
                        <input className="users-title-input" placeholder="Title" type="text" name="Title"/>
                        <textarea className="user-notes-input" rows="3" cols="50" placeholder="Write your note" type="text" name="Note"></textarea>
                        <div className="tools-container">
                            <div className="tools">
                                <MdOutlineColorLens className="cursor" />
                                <MdOutlineLabel className="mr-left cursor"/>
                                <RiInboxArchiveLine className="mr-left cursor" />
                            </div>
                            <button className="add-note-btn">Add</button>
                        </div>
                    </div>

                    <div className="notes-cards-container">
                        <NotesCard />
                        <NotesCard />
                    </div>
                </main>
            </div>

            
        </>
    )
}

export { HomePage };