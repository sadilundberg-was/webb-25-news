import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import { getDatasourceEntries } from '@/lib/queries';
import { CategoryIcon } from './Icons';

/** Map datasource `value` (e.g. TEKNIK) → icon key used in CSS / Icons.jsx */
const CATEGORY_ICON_BY_VALUE = {
	SVERIGE: 'building',
	VÄRLDEN: 'globe',
	VARLDEN: 'globe',
	EKONOMI: 'chart',
	TEKNIK: 'gear',
	KULTUR: 'paw',
};

export default async function Categories({ blok }) {
	const datasource = blok.datasource || 'categories';

	let entries = [];
	try {
		entries = await getDatasourceEntries(datasource);
	} catch {
		entries = [];
	}

	return (
		<section className="sidebar-block" {...storyblokEditable(blok)}>
			<h2 className="sidebar-block__title">{blok.title || 'Kategorier'}</h2>
			<ul className="category-list">
				{entries.map((entry) => {
					const icon =
						CATEGORY_ICON_BY_VALUE[entry.value] ||
						CATEGORY_ICON_BY_VALUE[entry.value?.toUpperCase()] ||
						'building';
					const href = `/kategori/${(entry.value || '').toLowerCase()}`;

					return (
						<li key={entry.id || entry.value} className="category-item">
							<Link href={href}>
								<span className={`category-item__icon category-item__icon--${icon}`}>
									<CategoryIcon name={icon} />
								</span>
								<span className="category-item__label">{entry.name}</span>
								<span className="category-item__chevron" aria-hidden="true">
									›
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
