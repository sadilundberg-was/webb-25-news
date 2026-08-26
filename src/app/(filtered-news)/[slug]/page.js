import { notFound } from 'next/navigation';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

import { getCategoryPage, getCategories, getStory } from '@/lib/queries';

export const dynamicParams = false;

export async function generateStaticParams() {
    const categories = await getCategories();

    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export default async function FilteredNewsPage({
    params,
    searchParams,
}) {
    const { slug } = await params;

    let story;

    try {
        await getStory(slug);
        story = await getCategoryPage();
    } catch {
        notFound();
    }

    return (
        <main className="mx-auto w-full max-w-site flex-1 px-6 py-9">
            {story.content?.body?.map((blok) => (
                <StoryblokServerComponent
                    blok={blok}
                    slug={slug}
                    searchParams={searchParams}
                    key={blok._uid}
                />
            ))}

        </main>
    );
}