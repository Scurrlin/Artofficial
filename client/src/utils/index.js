import FileSaver from 'file-saver';

import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
    const available = surpriseMePrompts.filter((p) => p !== prompt);
    return available[Math.floor(Math.random() * available.length)];
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `${_id}.jpg`);
}

export function optimizedImageUrl(url, width = 1024) {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    return url.replace('/upload/', `/upload/f_auto,q_auto:good,w_${width},c_fill/`);
}

export function placeholderImageUrl(url) {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    return url.replace('/upload/', '/upload/f_auto,q_auto:low,w_50,e_blur:200,c_fill/');
}