import { Event } from "nostr-tools";
import { getTagValue } from "../utils/tags";

export class Note {
    title?: string;
    image?: string;
    content: string;
    summary?: string;
    id: string;
    publishedAt?: number;
    lastUpdatedAt: number;

    constructor(event: Event) {
        this.title = getTagValue(event, "title");
        this.image = getTagValue(event, "image");
        this.content = event.content;
        this.summary = getTagValue(event,'summary')
        this.id = event.id;
        this.publishedAt = Number(getTagValue(event, "published_at"));
        this.lastUpdatedAt = event.created_at
    }
}
