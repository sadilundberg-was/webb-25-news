import { notFound, redirect } from 'next/navigation';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { getCategoryPage, getStory } from '@/lib/queries';

function withCategory(bloks, category) {
	if (!Array.isArray(bloks)) return bloks;
	return bloks.map((blok) => {
		const next = { ...blok };
		if (blok.component === 'filtered_news') next.category = category;
		if (blok.main) next.main = withCategory(blok.main, category);
		if (blok.aside) next.aside = withCategory(blok.aside, category);
		if (blok.body) next.body = withCategory(blok.body, category);
		return next;
	});
}

export default async function FilteredNewsLayout({ children, params }) {
	const { slug } = await params;

	let story;
	try {
		story = await getStory(slug);
	} catch {
		notFound();
	}

	let bloks = [];
	try {
		const template = await getCategoryPage();
		bloks = withCategory(template.content?.body, story.content?.category);
	} catch {
		console.error('Category page not found');
	}

	return (
		<main className="mx-auto w-full max-w-site flex-1 px-6 py-9">
			{bloks?.map((blok) => (
				<StoryblokServerComponent blok={blok} key={blok._uid} />
			))}
			{children}
		</main>
	);
}
