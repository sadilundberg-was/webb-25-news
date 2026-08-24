import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import { getAuthorName, getImageAlt, getImageUrl } from '@/lib/utils';

export default function Article({ blok }) {
	const imageUrl = getImageUrl(blok.image);
	const authorName = getAuthorName(blok.author);
	const html = blok.body ? renderRichText(blok.body) : '';

	return (
		<main className="mx-auto w-full max-w-site flex-1 px-6 pb-12">
			<article
				className="mx-auto max-w-article py-10 pb-16"
				{...storyblokEditable(blok)}
			>
				{imageUrl && (
					<div className="mb-7 aspect-video overflow-hidden rounded bg-border">
						<img
							src={imageUrl}
							alt={getImageAlt(blok.image, blok.title)}
							className="size-full object-cover"
						/>
					</div>
				)}
				<CategoryTag category={blok.category} />
				<h1 className="mb-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.02em]">
					{blok.title}
				</h1>
				<ArticleMeta
					date={blok.date}
					authorName={authorName}
					commentsCount={blok.comments_count}
				/>
				{blok.excerpt && (
					<p className="m-0 text-[0.95rem] leading-[1.65] text-muted">
						{blok.excerpt}
					</p>
				)}
				{html && (
					<div
						className="prose-article"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				)}
			</article>
		</main>
	);
}
