import "../../components/Card/NotesCard.css";

const TagsCard = ({note}) => {


    return (
        <div className={`notes-card ${note.color}`}>
            <div className="notes-content" >
                <div className="title-and-date-box">
                    <h3 className="card-title"> {note.title} </h3>
                    <p className="note-date"> {note.date} </p>
                </div>
                <div className="card-content" dangerouslySetInnerHTML={{ __html: note.content}} />
            </div>
        </div>
    )
   
}

export { TagsCard };

