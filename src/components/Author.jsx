import { storyblokEditable } from '@storyblok/react/rsc';

/** Author is mainly used as a reference; this renders if opened as its own story. */
export default function Author({ blok }) {
	return (
		<div className="mx-auto max-w-article py-10 pb-16" {...storyblokEditable(blok)}>
			<h1 className="mb-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.02em]">
				{blok.name}
			</h1>
			{blok.bio && (
				<p className="m-0 text-[0.95rem] leading-[1.65] text-muted">{blok.bio}</p>
			)}
		</div>
	);
}
