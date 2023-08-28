import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SimplePool } from "nostr-tools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorRoute, Root } from "./routes";
import HomeFeed from "./routes/HomeFeed";
import NoteRoute from "./routes/NoteRoute";
import { Note } from "./models/Note";

export const pool = new SimplePool();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorRoute />,
        children: [
            { path: "/", element: <HomeFeed /> },
            {
                path: "note/:noteId",
                element: <NoteRoute />,
                loader: async ({ params }) => {
                    const note = await pool.get(
                        [
                            "wss://nos.lol/",
                            "wss://nostrue.com",
                            "wss://relay.current.fyi",
                            "wss://nostr1.current.fyi",
                            "wss://nostr.mom",
                        ],
                        { ids: [params.noteId] }
                    );
                    if(note) {
                        const newNote = new Note(note);
                        return newNote;
                    }
                    throw new Error('Note not found!')
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
