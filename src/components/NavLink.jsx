'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { storyblokEditable } from '@storyblok/react';
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
	const pathname = usePathname();
	const isActive =
		href === '/'
			? pathname === '/'
			: pathname === href || pathname.startsWith(`${href}/`);

	return (
		<li {...storyblokEditable(blok)}>
			<Link
				href={href}
				className={cn(
					'border-b-[3px] py-5 text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-[color,border-color] duration-150 max-sm:py-1 max-sm:pb-2',
					isActive
						? 'border-primary text-primary'
						: 'border-transparent text-text hover:border-primary hover:text-primary',
				)}
			>
				{blok.label}
			</Link>
		</li>
	);
}
