import { Event } from "nostr-tools";

export function getTagValue(event: Event, value: string, index?: number) {
    const selectedTags = event.tags.filter((tag) => tag[0] === value);
    if (selectedTags.length > 0) {
        return selectedTags[0][index ? index : 1]
    }
    return undefined;
}
