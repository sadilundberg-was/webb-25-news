import { Suspense } from 'react';
import Search from '@/components/Search';

export default function SearchWrapper({ blok }) {
	return (
		<Suspense fallback={null}>
			<Search blok={blok} />
		</Suspense>
	);
}