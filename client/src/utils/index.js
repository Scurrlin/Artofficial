import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
    const available = surpriseMePrompts.filter((p) => p !== prompt);
    return available[Math.floor(Math.random() * available.length)];
}

export async function downloadImage(_id, photo) {
    const { saveAs } = await import('file-saver');
    saveAs(photo, `${_id}.jpg`);
}

export function optimizedImageUrl(url, width = 1440) {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    return url.replace('/upload/', `/upload/f_auto,q_auto:best,w_${width},c_fill/`);
}

export function placeholderImageUrl(url) {
    if (!url || !url.includes('res.cloudinary.com')) return url;
    return url.replace('/upload/', '/upload/f_auto,q_auto:low,w_50,e_blur:200,c_fill/');
}

const SRCSET_WIDTHS = [400, 640, 828, 1080, 1440];

export function responsiveSrcSet(url) {
    if (!url || !url.includes('res.cloudinary.com')) return '';
    return SRCSET_WIDTHS
        .map(w => `${url.replace('/upload/', `/upload/f_auto,q_auto:best,w_${w},c_fill/`)} ${w}w`)
        .join(', ');
}

export const CARD_SIZES = [
    '(max-width: 479px) 92vw',
    '(max-width: 639px) 45vw',
    '(max-width: 1023px) 30vw',
    '22vw',
].join(', ');