import { storyblokEditable } from '@storyblok/react/rsc';
import ArticleTeaser from './ArticleTeaser';
import { getFilteredArticles } from '@/lib/queries';

export default async function FilteredNews({ blok, slug, searchQuery }) {
	let stories = [];
	const category = slug;

	const title = blok.title || category;

	const limit = blok.limit?.value || 100;

	try {
		stories = await getFilteredArticles({
			category,
			searchQuery,
			perPage: limit,
		});
	} catch {
		stories = [];
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<section {...storyblokEditable(blok)}>
			<h2 className="mb-6 text-[1.35rem] font-extrabold tracking-[-0.02em]">
				{capitalizeFirstLetter(title)}
			</h2>
			<div>
				{stories.map((story) => (
					<ArticleTeaser key={story.uuid} story={story} />
				))}
			</div>
		</section>
	);
}
