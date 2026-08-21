import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import Link from 'next/link';

export default function Header({ blok }) {
	if (!blok) return null;

	return (
		<header className="site-header" {...storyblokEditable(blok)}>
			<div className="site-header__inner">
				<Link href="/" className="site-header__logo">
					{blok.logo?.filename ? (
						<img src={blok.logo.filename} alt={blok.logo.alt || 'Logotyp'} />
					) : (
						'NYHETER'
					)}
				</Link>
				<nav aria-label="Huvudnavigation">
					<ul className="site-header__nav">
						{blok.navigation?.map((navBlok) => (
							<StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
