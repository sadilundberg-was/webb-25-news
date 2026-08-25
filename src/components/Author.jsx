import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';
import { IconUser } from '@/ui/icons';
import { getImageAlt, getImageUrl } from '@/lib/utils';

export default function Author({ blok }) {
	const imageUrl = getImageUrl(blok.image);
	const html = blok.bio ? renderRichText(blok.bio) : '';

	return (
		<main
			className="mx-auto w-full max-w-site flex-1 px-6 pb-12"
			{...storyblokEditable(blok)}
		>
			<div className="my-10 flex items-start gap-6 rounded px-9 py-8 max-sm:flex-col max-sm:items-center max-sm:px-6 max-sm:text-center">
				{imageUrl ? (
					<div className="size-24 shrink-0 overflow-hidden rounded-full bg-border">
						<img
							src={imageUrl}
							alt={getImageAlt(blok.image, blok.name)}
							className="size-full object-cover"
						/>
					</div>
				) : (
					<div
						className="flex size-24 shrink-0 items-center justify-center rounded-full bg-primary text-white"
						aria-hidden="true"
					>
						<IconUser className="size-10" />
					</div>
				)}
				<div className="min-w-0 flex-1 max-sm:text-left">
					<h1 className="mb-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.02em]">
						{blok.name}
					</h1>
					{html && (
						<div
						className="prose mt-4 max-w-none"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					)}
				</div>
			</div>
		</main>
	);
}
