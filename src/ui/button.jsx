import { cn } from '@/lib/cn';

const variants = {
	primary:
		'bg-primary text-white hover:bg-primary-dark border-transparent',
	secondary:
		'bg-white text-text border-border hover:border-primary hover:text-primary',
};

export function Button({
	variant = 'primary',
	className,
	type = 'button',
	children,
	...props
}) {
	return (
		<button
			type={type}
			className={cn(
				'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm border px-7 py-3 text-[0.9rem] font-bold transition-colors duration-150',
				variants[variant] ?? variants.primary,
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
