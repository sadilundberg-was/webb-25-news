import { storyblokEditable } from '@storyblok/react/rsc';
import ArticleTeaser from './ArticleTeaser';
import { getFilteredArticles } from '@/lib/queries';

export default async function FilteredNews({ blok, slug }) {
	let stories = [];
	const category = slug;

	const limit = blok.limit?.value || 100;

	try {
		stories = await getFilteredArticles({
			category,
			q: blok.q,
			limit,
		});
	} catch {
		stories = [];
	}

	return (
		<section {...storyblokEditable(blok)}>
			<h2 className="mb-6 text-[1.35rem] font-extrabold tracking-[-0.02em]">
				{blok.title || 'Filtrat nytt'}
			</h2>
			<div>
				{stories.map((story) => (
					<ArticleTeaser key={story.uuid} story={story} />
				))}
			</div>
		</section>
	);
}
