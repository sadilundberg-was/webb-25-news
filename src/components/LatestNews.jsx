import { storyblokEditable } from '@storyblok/react/rsc';
import ArticleTeaser from './ArticleTeaser';
import { getLatestArticles } from '@/lib/queries';

export default async function LatestNews({ blok, searchQuery }) {
	let stories = [];

	const limit = blok.limit?.value || 4;

	try {
		stories = await getLatestArticles(limit, searchQuery);
	} catch {
		stories = [];
	}

	return (
		<section {...storyblokEditable(blok)}>
			<h2 className="mb-6 text-[1.35rem] font-extrabold tracking-[-0.02em]">
				{blok.title || 'Latest news'}
			</h2>
			<div>
				{stories.map((story) => (
					<ArticleTeaser key={story.uuid} story={story} />
				))}
			</div>
		</section>
	);
}
