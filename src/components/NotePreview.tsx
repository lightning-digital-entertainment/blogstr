import React from "react";
import { Note } from "../models/Note";
import { useNavigate } from "react-router-dom";

type NotePreviewProps = {
    note: Note;
};

function NotePreview({ note }: NotePreviewProps) {
  const navigate = useNavigate();
    return (
        <a onClick={() => {navigate(`note/${note.id}`)}} className="cursor-pointer m-auto">
            <div className="p-4 rounded-xl bg-zinc-600 m-2 max-w-lg">
                <img src={note.image} className="rounded-xl" />
                <h3 className="font-bold">{note.title}</h3>
                <p className="text-xs">{note.summary}</p>
            </div>
        </a>
    );
}

export default NotePreview;
