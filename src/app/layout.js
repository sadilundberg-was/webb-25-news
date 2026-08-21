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
		const config = story.content;
		headerBlok = config.header?.[0];
		footerBlok = config.footer?.[0];
	} catch {
		// Config-story saknas ännu — sidan renderas utan header/footer.
	}

	return (
		<StoryblokProvider>
			<html lang="sv">
				<body>
					{headerBlok && <Header blok={headerBlok} />}
					{children}
					{footerBlok && <Footer blok={footerBlok} />}
				</body>
			</html>
		</StoryblokProvider>
	);
}
