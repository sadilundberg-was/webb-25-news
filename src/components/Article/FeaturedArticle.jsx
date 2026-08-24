import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import ArticleMeta, { CategoryTag } from './ArticleMeta';
import { getArticleFields, getImageAlt, getImageUrl } from '@/lib/utils';

export default function FeaturedArticle({ blok }) {
	const article = getArticleFields(blok.article);

	if (!article) {
		return (
			<section
				className="grid grid-cols-[1.15fr_1fr] items-center gap-9 py-9 pb-10 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:py-7 max-[900px]:pb-8"
				{...storyblokEditable(blok)}
			>
				<p>Välj en artikel i Storyblok.</p>
			</section>
		);
	}

	const imageUrl = getImageUrl(article.image);

	return (
		<section
			className="grid grid-cols-[1.15fr_1fr] items-center gap-9 py-9 pb-10 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:py-7 max-[900px]:pb-8"
			{...storyblokEditable(blok)}
		>
			<div className="aspect-[16/10] overflow-hidden rounded bg-border">
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
				<h1 className="mb-1 text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-[1.25] tracking-[-0.02em]">
					<Link href={`/${article.slug}`}>{article.title}</Link>
				</h1>
				<ArticleMeta
					date={article.date}
					authorName={article.authorName}
					commentsCount={article.commentsCount}
				/>
				{article.excerpt && (
					<p className="m-0 text-[0.95rem] leading-[1.65] text-muted">
						{article.excerpt}
					</p>
				)}
			</div>
		</section>
	);
}
