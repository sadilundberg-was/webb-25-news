'use client';

import { storyblokEditable } from '@storyblok/react';
import { IconMail } from '@/ui/icons';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';

export default function Newsletter({ blok }) {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section
			className="my-2 mb-10 flex items-center justify-between gap-6 rounded bg-primary-softer px-9 py-7 max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:p-6"
			{...storyblokEditable(blok)}
		>
			<div className="flex min-w-0 items-center gap-4.5">
				<div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
					<IconMail className="size-5.5" />
				</div>
				<div>
					<h2 className="mb-0.5 text-[1.15rem] font-extrabold">
						{blok.title || 'Håll dig uppdaterad'}
					</h2>
					<p className="m-0 text-[0.9rem] text-muted">
						{blok.description || 'Följ oss för de senaste nyheterna.'}
					</p>
				</div>
			</div>
			<form
				className="flex shrink-0 gap-2.5 max-[900px]:flex-col"
				onSubmit={handleSubmit}
			>
				<Input
					type="email"
					name="email"
					required
					placeholder={blok.placeholder || 'Din e-post'}
					aria-label={blok.placeholder || 'Din e-post'}
				/>
				<Button type="submit">{blok.button_text || 'Prenumerera'}</Button>
			</form>
		</section>
	);
}
