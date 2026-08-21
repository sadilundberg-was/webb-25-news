import { storyblokEditable } from '@storyblok/react/rsc';

/** Author is mainly used as a reference; this renders if opened as its own story. */
export default function Author({ blok }) {
	return (
		<div className="article-page" {...storyblokEditable(blok)}>
			<h1 className="article-page__title">{blok.name}</h1>
			{blok.bio && <p className="featured__excerpt">{blok.bio}</p>}
		</div>
	);
}
