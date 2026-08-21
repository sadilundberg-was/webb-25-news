import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import { getArticleFields, getImageAlt, getImageUrl } from '@/lib/utils';

export default function FeaturedArticle({ blok }) {
	const article = getArticleFields(blok.article);

	if (!article) {
		return (
			<section className="featured" {...storyblokEditable(blok)}>
				<p>Välj en artikel i Storyblok.</p>
			</section>
		);
	}

	const imageUrl = getImageUrl(article.image);

	return (
		<section className="featured" {...storyblokEditable(blok)}>
			<div className="featured__image">
				{imageUrl && (
					<Link href={`/${article.slug}`}>
						<img
							src={imageUrl}
							alt={getImageAlt(article.image, article.title)}
						/>
					</Link>
				)}
			</div>
			<div className="featured__content">
				<CategoryTag category={article.category} />
				<h1 className="featured__title">
					<Link href={`/${article.slug}`}>{article.title}</Link>
				</h1>
				<ArticleMeta
					date={article.date}
					authorName={article.authorName}
					commentsCount={article.commentsCount}
				/>
				{article.excerpt && <p className="featured__excerpt">{article.excerpt}</p>}
			</div>
		</section>
	);
}
