import { Aside } from "../../components/Aside/Aside";
import { Navbar } from "../../components/Navbar/Navbar";
import { TagsCard } from "../../components/TagsCard/TagsCard";
import { useNote } from "../../Contexts/notesActions-context";
import { useTheme } from "../../Contexts/themeContext";
import "../../Pages/Home/Home.css";
import "./Tags.css";


const Tags = () => {

    const { noteState } = useNote();
    const { theme } = useTheme();
 
    return (
        <>
        <Navbar />

        <div className="notes-main-container">
            <Aside />

            <main className={`notes-users-main-container ${theme === "dark" ? "dark-bg" : ""} `}>

                <section className="tags-notes-container">
                    
                    <div className="space-devider"></div>
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Work</h3>
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
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Exercise</h3>
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
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Health</h3>
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
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Chores</h3>
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
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Creativity</h3>
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
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Study</h3>
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
                    <h3 className={`tag-heading ${theme === "dark" ? "color-fff" : ""} `}>Others</h3>
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