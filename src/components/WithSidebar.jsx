import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function WithSidebar({ blok }) {
	return (
		<div className="with-sidebar" {...storyblokEditable(blok)}>
			<div className="with-sidebar__main">
				{blok.main?.map((nested) => (
					<StoryblokServerComponent blok={nested} key={nested._uid} />
				))}
			</div>
			<aside className="with-sidebar__aside">
				{blok.sidebar?.map((nested) => (
					<StoryblokServerComponent blok={nested} key={nested._uid} />
				))}
			</aside>
		</div>
	);
}
