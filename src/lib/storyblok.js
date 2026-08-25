import Page from '@/components/Page';
import NavLink from '@/components/NavLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedArticle from '@/components/FeaturedArticle';
import LatestNews from '@/components/LatestNews';
import FilteredNews from '@/components/FilteredNews';
import SplitLayout from '@/components/SplitLayout';
import Popular from '@/components/Popular';
import Categories from '@/components/Categories';
import Newsletter from '@/components/Newsletter';
import Article from '@/components/Article';
import Author from '@/components/Author';
import CategoryPage from '@/components/CategoryPage';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: {
		page: Page,
		nav_link: NavLink,
		header: Header,
		footer: Footer,
		featured_article: FeaturedArticle,
		latest_news: LatestNews,
		filtered_news: FilteredNews,
		split_layout: SplitLayout,
		popular: Popular,
		popular_item: () => null,
		categories: Categories,
		'category-page': CategoryPage,
		newsletter: Newsletter,
		article: Article,
		author: Author,
	},
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: process.env.STORYBLOK_REGION || 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
});
