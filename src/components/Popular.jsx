import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import { PopularIcon } from './Icons';

function linkHref(link) {
	if (!link) return '#';
	if (link.linktype === 'url') return link.url || '#';
	const cached = link.cached_url || '';
	if (!cached || cached === 'home') return '/';
	return `/${cached}`;
}

export default function Popular({ blok }) {
	const items = blok.items || [];

	return (
		<section className="sidebar-block" {...storyblokEditable(blok)}>
			<h2 className="sidebar-block__title">{blok.title || 'Populärt'}</h2>
			<ul className="popular-list">
				{items.map((item) => (
					<li key={item._uid} className="popular-item" {...storyblokEditable(item)}>
						<span
							className={`popular-item__icon popular-item__icon--${item.icon || 'flame'}`}
						>
							<PopularIcon name={item.icon || 'flame'} />
						</span>
						<p className="popular-item__title">
							<Link href={linkHref(item.link)}>{item.title}</Link>
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
