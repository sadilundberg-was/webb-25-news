import { notFound } from 'next/navigation';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { getCategoryPage, getStory } from '@/lib/queries';

export default async function FilteredNewsLayout({ children, params }) {
	const { slug } = await params;
	try {
		await getStory(slug);
	} catch {
		notFound();
	}

	let story;
	try {
		story = await getCategoryPage();
	} catch {
		notFound();
	}

	return (
		<main className="mx-auto w-full max-w-site flex-1 px-6 py-9">
			{story.content?.body?.map((blok) => (
				<StoryblokServerComponent blok={blok} slug={slug} key={blok._uid} />
			))}
			{children}
		</main>
	);
}
