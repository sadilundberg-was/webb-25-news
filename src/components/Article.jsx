import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import { getAuthorName, getImageAlt, getImageUrl } from '@/lib/utils';

export default function Article({ blok }) {
	const imageUrl = getImageUrl(blok.image);
	const authorName = getAuthorName(blok.author);
	const html = blok.body ? renderRichText(blok.body) : '';

	return (
		<main className="site-main">
			<article className="article-page" {...storyblokEditable(blok)}>
				{imageUrl && (
					<div className="article-page__image">
						<img src={imageUrl} alt={getImageAlt(blok.image, blok.title)} />
					</div>
				)}
				<CategoryTag category={blok.category} />
				<h1 className="article-page__title">{blok.title}</h1>
				<ArticleMeta
					date={blok.date}
					authorName={authorName}
					commentsCount={blok.comments_count}
				/>
				{blok.excerpt && <p className="featured__excerpt">{blok.excerpt}</p>}
				{html && (
					<div
						className="article-page__body"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				)}
			</article>
		</main>
	);
}
