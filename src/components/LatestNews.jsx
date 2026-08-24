import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import { getArticleFields, getImageAlt, getImageUrl, resolveStories } from '@/lib/utils';

function ArticleTeaser({ article }) {
	const imageUrl = getImageUrl(article.image);

	return (
		<article className="grid grid-cols-[140px_1fr] gap-5 border-t border-border py-5 first-of-type:border-t-0 first-of-type:pt-0 max-sm:grid-cols-[100px_1fr] max-sm:gap-3.5">
			<div className="aspect-square overflow-hidden rounded-sm bg-border">
				{imageUrl && (
					<Link href={`/${article.slug}`}>
						<img
							src={imageUrl}
							alt={getImageAlt(article.image, article.title)}
							className="size-full object-cover"
						/>
					</Link>
				)}
			</div>
			<div>
				<CategoryTag category={article.category} />
				<h3 className="mb-1 text-[1.05rem] font-bold leading-[1.35] tracking-[-0.01em]">
					<Link href={`/${article.slug}`} className="hover:text-primary">
						{article.title}
					</Link>
				</h3>
				<ArticleMeta
					date={article.date}
					authorName={article.authorName}
					className="my-2 gap-3 text-[0.8rem]"
				/>
				{article.excerpt && (
					<p className="m-0 line-clamp-2 text-[0.875rem] leading-[1.55] text-muted max-sm:hidden">
						{article.excerpt}
					</p>
				)}
			</div>
		</article>
	);
}

export default function LatestNews({ blok }) {
	const articles = resolveStories(blok.articles)
		.map(getArticleFields)
		.filter(Boolean);

	return (
		<section {...storyblokEditable(blok)}>
			<h2 className="mb-6 text-[1.35rem] font-extrabold tracking-[-0.02em]">
				{blok.title || 'Senaste nytt'}
			</h2>
			<div>
				{articles.map((article) => (
					<ArticleTeaser key={article.slug} article={article} />
				))}
			</div>
		</section>
	);
}
