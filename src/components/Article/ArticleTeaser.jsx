import Link from 'next/link';
import ArticleMeta, { CategoryTag } from './ArticleMeta';

export default function ArticleTeaser({ story }) {
	const { title, image, category, date, excerpt, author } = story.content || {};
	const href = `/${story.full_slug}`;
	const imageUrl = image?.filename;
	const authorName = author?.content?.name || author?.name || '';

	return (
		<article className="grid grid-cols-[140px_1fr] gap-5 border-t border-border py-5 first-of-type:border-t-0 first-of-type:pt-0 max-sm:grid-cols-[100px_1fr] max-sm:gap-3.5">
			<div className="aspect-square overflow-hidden rounded-sm bg-border">
				{imageUrl && (
					<Link href={href}>
						<img
							src={imageUrl}
							alt={image?.alt || title || ''}
							className="size-full object-cover"
						/>
					</Link>
				)}
			</div>
			<div>
				<CategoryTag category={category} />
				<h3 className="mb-1 text-[1.05rem] font-bold leading-[1.35] tracking-[-0.01em]">
					<Link href={href} className="hover:text-primary">
						{title || story.name}
					</Link>
				</h3>
				<ArticleMeta
					date={date || story.first_published_at}
					authorName={authorName}
					className="my-2 gap-3 text-[0.8rem]"
				/>
				{excerpt && (
					<p className="m-0 line-clamp-2 text-[0.875rem] leading-[1.55] text-muted max-sm:hidden">
						{excerpt}
					</p>
				)}
			</div>
		</article>
	);
}
