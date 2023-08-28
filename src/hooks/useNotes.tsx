import { useEffect, useState } from "react";
import { pool } from "../main";
import { Note } from "../models/Note";

const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    useEffect(() => {
        const receivedEvents = new Set<Note>();
        const sub = pool.sub(
            ["wss://nos.lol/", "wss://nostrue.com", "wss://relay.current.fyi", "wss://nostr1.current.fyi", "wss://nostr.mom"],
            [
                {
                    kinds: [30023],
                    authors: [
                        import.meta.env.VITE_PUBKEY,
                    ],
                    limit: 1,
                },
            ]
        );
        sub.on("event", (event) => {
            const newNote = new Note(event);
            receivedEvents.add(newNote);
            setNotes([...receivedEvents]);
        });
        sub.on("eose", () => {
            setIsFetching(false);
        });
    }, []);
    return { notes, isFetching };
};

export default useNotes;