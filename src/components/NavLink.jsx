import { storyblokEditable } from '@storyblok/react/rsc';

function getHref(link) {
	if (!link) return '/';
	if (link.linktype === 'url') return link.url || '/';
	const cached = link.cached_url || '';
	if (!cached || cached === 'home') return '/';
	return cached.startsWith('/') ? cached : `/${cached}`;
}

export default function NavLink({ blok }) {
	const href = getHref(blok.link);
	const isHome = href === '/' || blok.label?.toLowerCase() === 'hem';

	return (
		<li {...storyblokEditable(blok)}>
			<a
				href={href}
				className={`site-header__link${isHome ? ' site-header__link--active' : ''}`}
			>
				{blok.label}
			</a>
		</li>
	);
}
