import NotePreview from "../components/NotePreview"; 
import useNotes from "../hooks/useNotes";

function HomeFeed() {
    const { notes, isFetching } = useNotes();

    console.log(isFetching);
    return (
        <div className="flex flex-col shrink justify-center
        ">
            {notes.map((note) => (
                <NotePreview note={note}/>
            ))}
        </div>
    );
}

export default HomeFeed;
