import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import { getArticleFields, getImageAlt, getImageUrl, resolveStories } from '@/lib/utils';

function ArticleTeaser({ article }) {
	const imageUrl = getImageUrl(article.image);

	return (
		<article className="article-teaser">
			<div className="article-teaser__image">
				{imageUrl && (
					<Link href={`/${article.slug}`}>
						<img
							src={imageUrl}
							alt={getImageAlt(article.image, article.title)}
						/>
					</Link>
				)}
			</div>
			<div className="article-teaser__body">
				<CategoryTag category={article.category} />
				<h3 className="article-teaser__title">
					<Link href={`/${article.slug}`}>{article.title}</Link>
				</h3>
				<ArticleMeta date={article.date} authorName={article.authorName} />
				{article.excerpt && (
					<p className="article-teaser__excerpt">{article.excerpt}</p>
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
		<section className="latest-news" {...storyblokEditable(blok)}>
			<h2 className="latest-news__title">{blok.title || 'Senaste nytt'}</h2>
			<div className="latest-news__list">
				{articles.map((article) => (
					<ArticleTeaser key={article.slug} article={article} />
				))}
			</div>
		</section>
	);
}
