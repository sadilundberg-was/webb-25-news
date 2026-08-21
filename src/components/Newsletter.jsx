'use client';

import { storyblokEditable } from '@storyblok/react';
import { IconMail } from './Icons';

export default function Newsletter({ blok }) {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="newsletter" {...storyblokEditable(blok)}>
			<div className="newsletter__content">
				<div className="newsletter__icon">
					<IconMail />
				</div>
				<div>
					<h2 className="newsletter__title">
						{blok.title || 'Håll dig uppdaterad'}
					</h2>
					<p className="newsletter__text">
						{blok.description || 'Följ oss för de senaste nyheterna.'}
					</p>
				</div>
			</div>
			<form className="newsletter__form" onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					required
					placeholder={blok.placeholder || 'Din e-post'}
					className="newsletter__input"
					aria-label={blok.placeholder || 'Din e-post'}
				/>
				<button type="submit" className="newsletter__button">
					{blok.button_text || 'Prenumerera'}
				</button>
			</form>
		</section>
	);
}
