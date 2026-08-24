import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import Link from 'next/link';

export default function Header({ blok }) {
	if (!blok) return null;

	return (
		<header
			className="sticky top-0 z-50 border-b border-border bg-white"
			{...storyblokEditable(blok)}
		>
			<div className="mx-auto flex h-16 max-w-site items-center justify-between gap-8 px-6 max-sm:h-auto max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:px-6 max-sm:py-4">
				<Link
					href="/"
					className="inline-flex items-center text-[1.35rem] font-extrabold tracking-[0.02em] text-text"
				>
					{blok.logo?.filename ? (
						<img
							src={blok.logo.filename}
							alt={blok.logo.alt || 'Logotyp'}
							className="block h-9 w-auto"
						/>
					) : (
						'NYHETER'
					)}
				</Link>
				<nav aria-label="Huvudnavigation">
					<ul className="m-0 flex list-none items-center gap-7 p-0 max-sm:flex-wrap max-sm:gap-4">
						{blok.navigation?.map((navBlok) => (
							<StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
