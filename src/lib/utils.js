const MONTHS_SV = [
	'januari',
	'februari',
	'mars',
	'april',
	'maj',
	'juni',
	'juli',
	'augusti',
	'september',
	'oktober',
	'november',
	'december',
];

export function formatDate(dateStr) {
	if (!dateStr) return '';
	const date = new Date(dateStr);
	if (Number.isNaN(date.getTime())) return dateStr;
	return `${date.getDate()} ${MONTHS_SV[date.getMonth()]} ${date.getFullYear()}`;
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

export function getArticleFields(articleRef) {
	const story = resolveStory(articleRef);
	if (!story) return null;
	const content = story.content || {};
	return {
		slug: story.full_slug || story.slug || '#',
		title: content.title || story.name || '',
		image: content.image,
		category: content.category || '',
		date: content.date || story.first_published_at,
		authorName: getAuthorName(content.author),
		excerpt: content.excerpt || '',
		commentsCount: content.comments_count,
		body: content.body,
	};
}
