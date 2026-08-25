import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import { PopularIcon } from '@/ui/icons';
import { cn } from '@/lib/cn';

function linkHref(link) {
	if (!link) return '#';
	if (link.linktype === 'url') return link.url || '#';
	const cached = link.cached_url || '';
	if (!cached || cached === 'home') return '/';
	return `/${cached}`;
}

const ICON_BG = {
	flame: 'bg-red-500',
	chart: 'bg-green-500',
	globe: 'bg-violet-500',
};

export default function Popular({ blok }) {
	const items = blok.items || [];

	return (
		<section {...storyblokEditable(blok)}>
			<h2 className="mb-4 text-[1.15rem] font-extrabold tracking-[-0.02em]">
				{blok.title || 'Popular'}
			</h2>
			<ul className="m-0 flex list-none flex-wrap gap-3.5 p-0">
				{items.map((item) => {
					const icon = item.icon || 'flame';
					return (
						<li
							key={item._uid}
							className="flex min-w-40 flex-1 items-start gap-3 border-b border-border pb-3"
							{...storyblokEditable(item)}
						>
							<span
								className={cn(
									'flex size-10 shrink-0 items-center justify-center rounded-[10px] text-white',
									ICON_BG[icon] ?? ICON_BG.flame,
								)}
							>
								<PopularIcon name={icon} className="size-4.5" />
							</span>
							<p className="m-0 text-[0.9rem] font-semibold leading-[1.4]">
								<Link href={linkHref(item.link)} className="hover:text-primary">
									{item.title}
								</Link>
							</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
