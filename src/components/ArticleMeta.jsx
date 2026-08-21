import { storyblokEditable } from '@storyblok/react/rsc';
import { IconCalendar, IconComment, IconUser } from './Icons';
import { formatDate } from '@/lib/utils';

export default function ArticleMeta({ date, authorName, commentsCount, className = '' }) {
	return (
		<div className={`meta ${className}`.trim()}>
			{date && (
				<span className="meta__item">
					<IconCalendar />
					{formatDate(date)}
				</span>
			)}
			{authorName && (
				<span className="meta__item">
					<IconUser />
					{authorName}
				</span>
			)}
			{commentsCount != null && commentsCount !== '' && (
				<span className="meta__item">
					<IconComment />
					{commentsCount} kommentarer
				</span>
			)}
		</div>
	);
}

export function CategoryTag({ category, editable }) {
	if (!category) return null;
	return (
		<span className="tag" {...(editable || {})}>
			{category}
		</span>
	);
}

/** Shared editable wrapper helper when needed */
export { storyblokEditable };
