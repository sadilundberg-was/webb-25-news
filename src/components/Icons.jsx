import { cn } from '@/lib/cn';

function Svg({ className, children, ...props }) {
	return (
		<svg
			viewBox="0 0 24 24"
			className={cn('size-4', className)}
			aria-hidden="true"
			{...props}
		>
			{children}
		</svg>
	);
}

export function IconCalendar({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<rect x="3" y="4" width="18" height="18" rx="2" />
			<path d="M16 2v4M8 2v4M3 10h18" />
		</Svg>
	);
}

export function IconUser({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</Svg>
	);
}

export function IconComment({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
		</Svg>
	);
}

export function IconMail({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
			<path d="m22 6-10 7L2 6" />
		</Svg>
	);
}

export function IconFlame({ className }) {
	return (
		<Svg className={className} fill="currentColor">
			<path d="M12 23c-4 0-7-2.8-7-7 0-2.8 1.5-4.8 3.2-6.5.4-.4 1-.3 1.2.2.5 1.3 1.4 2.4 2.1 2.4.9 0 1.1-1.5 1.5-3.2.3-1.3.7-2.7 1.8-3.7.4-.4 1-.2 1.1.3C17.5 9 19 12.2 19 16c0 4.2-3 7-7 7z" />
		</Svg>
	);
}

export function IconChart({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
			<path d="M4 19V9M12 19V5M20 19v-7" />
		</Svg>
	);
}

export function IconGlobe({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<circle cx="12" cy="12" r="9" />
			<path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
		</Svg>
	);
}

export function IconBuilding({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M8 8h2M8 12h2M8 16h2" />
		</Svg>
	);
}

export function IconGear({ className }) {
	return (
		<Svg className={className} fill="none" stroke="currentColor" strokeWidth="2">
			<circle cx="12" cy="12" r="3" />
			<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		</Svg>
	);
}

export function IconPaw({ className }) {
	return (
		<Svg className={className} fill="currentColor">
			<ellipse cx="8" cy="8" rx="2.2" ry="2.8" />
			<ellipse cx="16" cy="8" rx="2.2" ry="2.8" />
			<ellipse cx="5.5" cy="13" rx="2" ry="2.4" />
			<ellipse cx="18.5" cy="13" rx="2" ry="2.4" />
			<path d="M12 12c-2.8 0-5 2-5 4.5S9.5 21 12 21s5-2 5-4.5S14.8 12 12 12z" />
		</Svg>
	);
}

const POPULAR_ICONS = {
	flame: IconFlame,
	chart: IconChart,
	globe: IconGlobe,
};

const CATEGORY_ICONS = {
	building: IconBuilding,
	globe: IconGlobe,
	chart: IconChart,
	gear: IconGear,
	paw: IconPaw,
};

export function PopularIcon({ name, className }) {
	const Comp = POPULAR_ICONS[name] || IconFlame;
	return <Comp className={className} />;
}

export function CategoryIcon({ name, className }) {
	const Comp = CATEGORY_ICONS[name] || IconBuilding;
	return <Comp className={className} />;
}
