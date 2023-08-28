import { useLoaderData, useNavigate } from "react-router-dom";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Note } from "../models/Note";

function NoteRoute() {
    const data = useLoaderData() as Note;
    const nav = useNavigate();
    return (
        <div className="max-w-3xl flex flex-col w-full p-2 bg-zinc-800 m-2 rounded">
            <button
                className="py-1 px-2 border-2 border-zinc-500 rounded-lg text-zinc-500 hover:bg-zinc-600 w-full"
                onClick={() => {
                    nav("/");
                }}
            >
                Go Back
            </button>
            <h2 className="text-2xl font-bold mt-4">{data.title}</h2>
            {data.publishedAt ? (
                <p className="italic text-sm">
                    published on{" "}
                    {new Date(data.publishedAt * 1000).toLocaleDateString()}
                </p>
            ) : (
                <p className="italic text-sm">
                    published on{" "}
                    {new Date(data.lastUpdatedAt * 1000).toLocaleDateString()}
                </p>
            )}
            {data.image ? <img src={data.image} /> : undefined}
            <div>
                <MarkdownEditor.Markdown
                    source={data.content}
                    style={{
                        backgroundColor: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "100%",
                    }}
                />
            </div>
        </div>
    );
}

export default NoteRoute;
