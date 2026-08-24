import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';
import { getConfigStory } from '@/lib/queries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'NYHETER',
	description: 'Senaste nytt från Sverige och världen',
};

export default async function RootLayout({ children }) {
	let headerBlok;
	let footerBlok;

	try {
		const story = await getConfigStory();
		headerBlok = story.content?.header?.[0];
		footerBlok = story.content?.footer?.[0];
	} catch {
		console.error('Config story not found');
	}

	return (
		<StoryblokProvider>
			<html lang="sv">
				<body>
					<div className="flex min-h-screen flex-col">
						{headerBlok && <Header blok={headerBlok} />}
						{children}
						{footerBlok && <Footer blok={footerBlok} />}
					</div>
				</body>
			</html>
		</StoryblokProvider>
	);
}
