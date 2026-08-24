import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function SplitLayout({ blok }) {
	return (
		<div
			className="grid grid-cols-[1fr_300px] items-start gap-12 pb-10 max-[900px]:grid-cols-1 max-[900px]:gap-10"
			{...storyblokEditable(blok)}
		>
			<div className="min-w-0">
				{blok.main?.map((nested) => (
					<StoryblokServerComponent blok={nested} key={nested._uid} />
				))}
			</div>
			<aside className="flex min-w-0 flex-col gap-9">
				{blok.aside?.map((nested) => (
					<StoryblokServerComponent blok={nested} key={nested._uid} />
				))}
			</aside>
		</div>
	);
}
