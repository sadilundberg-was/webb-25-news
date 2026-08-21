import { storyblokEditable } from '@storyblok/react/rsc';

export default function Footer({ blok }) {
	if (!blok) return null;

	return (
		<footer className="site-footer" {...storyblokEditable(blok)}>
			<div className="site-footer__inner">
				{blok.copyright && <p className="site-footer__copyright">{blok.copyright}</p>}
				{blok.description && (
					<p className="site-footer__description">{blok.description}</p>
				)}
			</div>
		</footer>
	);
}
