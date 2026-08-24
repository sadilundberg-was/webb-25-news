import { notFound, redirect } from 'next/navigation';
import { StoryblokStory } from '@storyblok/react/rsc';
import { getStory } from '@/lib/queries';

export default async function Page({ params }) {
	const { slug } = await params;
	const fullSlug = slug ? slug.join('/') : 'home';

	if (fullSlug === 'config') {
		redirect('/');
	}

	let story;
	try {
		story = await getStory(fullSlug);
	} catch {
		notFound();
	}

	return <StoryblokStory story={story} />;
}
