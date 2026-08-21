import { getStoryblokApi } from '@/lib/storyblok';

const version = 'draft';

const resolveRelations = [
	'article.author',
	'featured_article.article',
	'latest_news.articles',
];

export async function getConfigStory() {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/config', {
		version,
		resolve_links: 'url',
	});
	return data.story;
}

export async function getHomeStory() {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/home', {
		version,
		resolve_relations: resolveRelations,
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

export async function getArticleStories({ category, q } = {}) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.getStories({
		version,
		starts_with: 'articles/',
		content_type: 'article',
		is_startpage: false,
		resolve_relations: 'article.author',
		...(q && { search_term: q }),
		...(category && {
			filter_query: { category: { in: category } },
		}),
	});
	return data.stories;
}

export async function getArticleStory(slug) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get(`cdn/stories/articles/${slug}`, {
		version,
		resolve_relations: 'article.author',
	});
	return data.story;
}

export async function getDatasourceEntries(datasource) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/datasource_entries', {
		datasource,
	});
	return data.datasource_entries || [];
}
