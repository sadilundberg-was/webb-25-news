import { cn } from '@/lib/cn';

export function Input({ className, type = 'text', ...props }) {
	return (
		<input
			type={type}
			className={cn(
				'min-w-[220px] rounded-sm border border-border bg-white px-4 py-3 text-[0.9rem] outline-none focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-soft)] max-md:min-w-0 max-md:w-full',
				className,
			)}
			{...props}
		/>
	);
}
