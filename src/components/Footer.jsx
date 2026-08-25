import { storyblokEditable } from '@storyblok/react/rsc';

export default function Footer({ blok }) {
	if (!blok) return null;

	return (
		<footer
			className="mt-auto w-full border-t border-border bg-footer"
			{...storyblokEditable(blok)}
		>
			<div className="mx-auto max-w-site flex justify-center px-6 pt-7 pb-9">
				{blok.copyright && (
					<p className="mb-1.5 text-[0.9rem] font-bold">{blok.copyright}</p>
				)}
				{blok.description && ( 
					<p className="m-0 max-w-xl text-[0.875rem] leading-[1.55] text-muted">
						{blok.description}
					</p>
				)}
			</div>
		</footer>
	);
}
