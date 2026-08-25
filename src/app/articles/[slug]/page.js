import { notFound } from 'next/navigation';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStory } from '@/lib/queries';

export default async function ArticlePage({ params }) {
	const { slug } = await params;

	let story;
	try {
		story = await getStory(`articles/${slug}`);
	} catch {
		notFound();
	}

	return <StoryblokStory story={story} />;
}
