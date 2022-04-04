import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import { TagsCard } from "../../components/TagsCard/TagsCard";
import { useNote } from "../../Contexts/notesActions-context";
import "../../Pages/Home/Home.css";
import "./Tags.css";


const Tags = () => {

    const { noteState } = useNote();
 
    return (
        <>
        <Navbar />

        <div className="notes-main-container">
            <Aside />

            <main className="notes-users-main-container">

                <section className="tags-notes-container">
                    
                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Work</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                        {
                            noteState.notes.map( item =>{
                                if(item.tags.find(tag => tag === "work")){
                                  return  <TagsCard key={item} note = {item} />
                                }
                            }
                            )
                        }
                        
                    </div> 

                </section>

                <section className="tags-notes-container">

                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Exercise</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                    {
                            noteState.notes.map( item =>(
                                item.tags.find(tag => tag === "exercise")
                                ?
                                <TagsCard key={item} note = {item} />
                                :
                                ""
                                )
                            
                            )
                        }
                    </div> 

                </section>

                <section className="tags-notes-container">

                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Health</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                    {
                            noteState.notes.map( item =>{
                                if(item.tags.find(tag => tag === "health")){
                                  return  <TagsCard key={item} note = {item} />
                                }
                            }
                            )
                        }
                    </div> 

                </section>

                <section className="tags-notes-container">

                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Chores</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                    {
                            noteState.notes.map( item =>{
                                if(item.tags.find(tag => tag === "chores")){
                                  return  <TagsCard key={item} note = {item} />
                                }
                            }
                            )
                        }
                    </div> 

                </section>

                <section className="tags-notes-container">

                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Creativity</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                    {
                            noteState.notes.map( item =>{
                                if(item.tags.find(tag => tag === "creativity")){
                                  return  <TagsCard key={item} note = {item} />
                                }
                            }
                            )
                        }
                    </div> 

                </section>

                 <section className="tags-notes-container">

                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Study</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                    {
                            noteState.notes.map( item =>{
                                if(item.tags.find(tag => tag === "study")){
                                  return  <TagsCard key={item} note = {item} />
                                }
                            }
                            )
                        }
                    </div> 

                </section>

                <section className="tags-notes-container">

                    <div className="space-devider"></div>
                    <h3 className="tag-heading">Others</h3>
                    <div className="space-devider"></div>

                    <div className="notes-cards-container tags-cards-area">
                    {
                            noteState.notes.map( item =>{
                                if(item.tags.find(tag => tag !== "work" && tag !== "exercise" && tag !== "health" && tag !== "chores" && tag !== "creativity" && tag !== "study")){
                                  return  <TagsCard key={item} note = {item} />
                                }
                            }
                            )
                        }
                    </div> 

                </section>

            </main>
        </div>
    </>
    )
}

export { Tags } ;