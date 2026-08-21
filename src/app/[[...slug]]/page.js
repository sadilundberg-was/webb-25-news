import { redirect } from 'next/navigation';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStory } from '@/lib/queries';

export default async function Page({ params }) {
	const { slug } = await params;

	// [[...slug]] → array of segments, or undefined on `/`
	const fullSlug = slug ? slug.join('/') : 'home';

	// Config is global data for layout — not a public page.
	if (fullSlug === 'config') {
		redirect('/');
	}

	const story = await getStory(fullSlug);

	return <StoryblokStory story={story} />;
}
