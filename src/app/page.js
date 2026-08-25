import { notFound } from 'next/navigation';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStory } from '@/lib/queries';

export default async function HomePage({ searchParams }) {
	const { searchQuery } = await searchParams;

	let story;
	try {
		story = await getStory('home');
	} catch {
		notFound();
	}

	return <StoryblokStory story={story} searchQuery={searchQuery} />;
}
