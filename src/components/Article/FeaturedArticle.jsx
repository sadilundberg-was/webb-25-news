import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import {
	getAuthorHref,
	getAuthorName,
	getImageAlt,
	getImageUrl,
	resolveStory,
} from '@/lib/utils';

export default function FeaturedArticle({ blok }) {
	const story = resolveStory(blok.article);

	if (!story) {
		return (
			<section
				className="grid grid-cols-[1.15fr_1fr] items-center gap-9 py-9 pb-10 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:py-7 max-[900px]:pb-8"
				{...storyblokEditable(blok)}
			>
				<p>Välj en artikel i Storyblok.</p>
			</section>
		);
	}

	const { title, image, category, date, excerpt, author, comments_count } =
		story.content || {};
	const href = `/${story.full_slug}`;
	const imageUrl = getImageUrl(image);
	const authorName = getAuthorName(author);
	const authorHref = getAuthorHref(author);

	return (
		<section
			className="grid grid-cols-[1.15fr_1fr] items-center gap-9 py-9 pb-10 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:py-7 max-[900px]:pb-8"
			{...storyblokEditable(blok)}
		>
			<div className="aspect-16/10 overflow-hidden rounded bg-border">
				{imageUrl && (
					<Link href={href}>
						<img
							src={imageUrl}
							alt={getImageAlt(image, title)}
							className="size-full object-cover"
						/>
					</Link>
				)}
			</div>
			<div>
				<CategoryTag category={category} />
				<h1 className="mb-1 text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-[1.25] tracking-[-0.02em]">
					<Link href={href}>{title || story.name}</Link>
				</h1>
				<ArticleMeta
					date={date || story.first_published_at}
					authorName={authorName}
					authorHref={authorHref}
					commentsCount={comments_count}
				/>
				{excerpt && (
					<p className="m-0 text-[0.95rem] leading-[1.65] text-muted">
						{excerpt}
					</p>
				)}
			</div>
		</section>
	);
}
