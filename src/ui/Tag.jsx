import { cn } from '@/lib/cn';

export function Tag({ className, children, ...props }) {
	return (
		<span
			className={cn(
				'mb-2.5 inline-block rounded-tag bg-tag-bg px-2.5 py-1 text-[0.7rem] font-bold tracking-[0.04em] text-tag-text uppercase',
				className,
			)}
			{...props}
		>
			{children}
		</span>
	);
}
