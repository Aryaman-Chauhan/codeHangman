import { words } from "./words";

export function fetchNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}