import { storyblokEditable } from '@storyblok/react/rsc';
import { IconCalendar, IconComment, IconUser } from '@/ui/icons';
import { Tag } from '@/ui/tag';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/cn';

export default function ArticleMeta({
	date,
	authorName,
	commentsCount,
	className = '',
}) {
	return (
		<div
			className={cn(
				'my-3 flex flex-wrap items-center gap-4 text-[0.85rem] text-muted',
				className,
			)}
		>
			{date && (
				<span className="inline-flex items-center gap-1.5">
					<IconCalendar className="size-4 shrink-0 opacity-70" />
					{formatDate(date)}
				</span>
			)}
			{authorName && (
				<span className="inline-flex items-center gap-1.5">
					<IconUser className="size-4 shrink-0 opacity-70" />
					{authorName}
				</span>
			)}
			{commentsCount != null && commentsCount !== '' && (
				<span className="inline-flex items-center gap-1.5">
					<IconComment className="size-4 shrink-0 opacity-70" />
					{commentsCount} kommentarer
				</span>
			)}
		</div>
	);
}

export function CategoryTag({ category, editable }) {
	if (!category) return null;
	return (
		<Tag {...(editable || {})}>{category}</Tag>
	);
}

/** Shared editable wrapper helper when needed */
export { storyblokEditable };
