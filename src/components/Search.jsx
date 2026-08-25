'use client';

import { storyblokEditable } from '@storyblok/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { Tag } from '@/ui/tag';
import { IconSearch } from '@/ui/icons';

export default function Search({ blok }) {
	const placeholder = blok.placeholder || 'Search articles…';
	const buttonText = blok.button_text || 'Search';
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const searchQuery = searchParams.get('searchQuery')?.trim() || '';

	function clearSearch() {
		const params = new URLSearchParams(searchParams.toString());
		params.delete('searchQuery');
		const qs = params.toString();
		router.push(qs ? `${pathname}?${qs}` : pathname);
	}

	return (
		<section className="mb-8" {...storyblokEditable(blok)}>
			{blok.label && (
				<label
					htmlFor="searchQuery"
					className="mb-2.5 block text-[0.7rem] font-bold tracking-[0.04em] text-muted uppercase"
				>
					{blok.label}
				</label>
			)}
			<form action={pathname} method="GET" className="flex">
				<Input
					id="searchQuery"
					type="search"
					name="searchQuery"
					placeholder={placeholder}
					aria-label={blok.label || placeholder}
					defaultValue={searchQuery}
					key={searchQuery}
					className="w-full min-w-0 rounded-r-none"
				/>
				<Button
					type="submit"
					aria-label={buttonText}
					className="shrink-0 rounded-l-none px-2.5! sm:px-7!"
				>
					<IconSearch className="size-5 sm:hidden" />
					<span className="hidden sm:inline">{buttonText}</span>
				</Button>
			</form>
			{searchQuery && (
				<div className="mt-3">
					<Tag className="mb-0! inline-flex items-center gap-1.5 normal-case tracking-normal">
						{searchQuery}
						<button
							type="button"
							onClick={clearSearch}
							aria-label={`Remove search: ${searchQuery}`}
							className="cursor-pointer border-0 bg-transparent p-0 text-lg leading-none text-tag-text hover:opacity-70"
						>
							×
						</button>
					</Tag>
				</div>
			)}
		</section>
	);
}
