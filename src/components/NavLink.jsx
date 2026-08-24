import { storyblokEditable } from '@storyblok/react/rsc';
import { cn } from '@/lib/cn';

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
				className={cn(
					'border-b-[3px] border-transparent py-5 text-[0.8rem] font-bold tracking-[0.04em] text-text uppercase transition-[color,border-color] duration-150 hover:border-primary hover:text-primary max-sm:py-1 max-sm:pb-2',
					isHome && 'border-primary text-primary',
				)}
			>
				{blok.label}
			</a>
		</li>
	);
}
