const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export function formatDate(dateStr) {
	if (!dateStr) return '';
	const date = new Date(dateStr);
	if (Number.isNaN(date.getTime())) return dateStr;
	return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function getImageUrl(image) {
	if (!image) return '';
	if (typeof image === 'string') return image;
	return image.filename || image.url || '';
}

export function getImageAlt(image, fallback = '') {
	if (!image || typeof image === 'string') return fallback;
	return image.alt || fallback;
}

export function resolveStory(ref) {
	if (!ref) return null;
	const item = Array.isArray(ref) ? ref[0] : ref;
	if (!item || typeof item === 'string') return null;
	return item;
}

export function resolveStories(refs) {
	if (!refs) return [];
	const list = Array.isArray(refs) ? refs : [refs];
	return list.filter((item) => item && typeof item !== 'string');
}

export function getAuthorName(authorRef) {
	const author = resolveStory(authorRef);
	if (!author) return '';
	return author.content?.name || author.name || '';
}

export function getAuthorHref(authorRef) {
	const author = resolveStory(authorRef);
	if (!author?.full_slug) return undefined;
	return `/${author.full_slug}`;
}
