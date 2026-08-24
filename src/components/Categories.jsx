import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import { getDatasourceEntries } from '@/lib/queries';
import { CategoryIcon } from '@/ui/icons';
import { cn } from '@/lib/cn';

const CATEGORY_ICON_BY_VALUE = {
	SVERIGE: 'building',
	VÄRLDEN: 'globe',
	VARLDEN: 'globe',
	EKONOMI: 'chart',
	TEKNIK: 'gear',
	KULTUR: 'paw',
};

const ICON_BG = {
	building: 'bg-blue-500',
	globe: 'bg-green-500',
	chart: 'bg-amber-500',
	gear: 'bg-violet-500',
	paw: 'bg-pink-500',
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
		<section {...storyblokEditable(blok)}>
			<h2 className="mb-4 text-[1.15rem] font-extrabold tracking-[-0.02em]">
				{blok.title || 'Kategorier'}
			</h2>
			<ul className="m-0 flex list-none flex-wrap gap-3.5 p-0">
				{entries.map((entry) => {
					const icon =
						CATEGORY_ICON_BY_VALUE[entry.value] ||
						CATEGORY_ICON_BY_VALUE[entry.value?.toUpperCase()] ||
						'building';
					const href = `/kategori/${(entry.value || '').toLowerCase()}`;

					return (
						<li key={entry.id || entry.value} className="min-w-[10rem] flex-1">
							<Link
								href={href}
								className="flex items-center gap-3 rounded-sm bg-gray-100 p-3 text-[0.95rem] font-semibold transition-colors duration-150 hover:text-primary"
							>
								<span
									className={cn(
										'flex size-9 shrink-0 items-center justify-center rounded-full text-white',
										ICON_BG[icon] ?? ICON_BG.building,
									)}
								>
									<CategoryIcon name={icon} className="size-4" />
								</span>
								<span className="min-w-0 flex-1">{entry.name}</span>
								<span className="text-[1.1rem] font-normal text-muted" aria-hidden="true">
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
