import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function CategoryPage({ blok, searchQuery }) {
	return (
		<main
			className="mx-auto w-full max-w-site flex-1 px-6 pb-12"
			{...storyblokEditable(blok)}
		>
			{blok.body?.map((nestedBlok) => (
				<StoryblokServerComponent
					blok={nestedBlok}
					searchQuery={searchQuery}
					key={nestedBlok._uid}
				/>
			))}
		</main>
	);
}
