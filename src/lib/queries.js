import { getStoryblokApi } from '@/lib/storyblok';

const version = 'draft';

const resolveRelations = [
	'article.author',
	'featured_article.article',
];

export async function getConfigStory() {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/config', {
		version,
		resolve_links: 'url',
	});
	return data.story;
}

export async function getStory(slug) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
		version,
		resolve_relations: resolveRelations,
	});
	return data.story;
}

export async function getLatestArticles(limit = 4) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.getStories({
		version,
		starts_with: 'articles/',
		content_type: 'article',
		is_startpage: false,
		resolve_relations: 'article.author',
		sort_by: 'content.date:desc',
		per_page: limit,
	});
	return data.stories;
}

export async function getDatasourceEntries(datasource) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/datasource_entries', {
		datasource,
	});
	return data.datasource_entries || [];
}
