import type { TemplateProps } from "nefantaris";
import { Link } from "wouter";
import PostList from "../components/PostList";
import Prose from "../components/Prose";

const recentPostLimit = 3;

const HomeTemplate = ({ meta, posts, children }: TemplateProps) => {
    const recentPosts = posts.slice(0, recentPostLimit);

    return (
        <div className="flex flex-col gap-16">
            <section className="max-w-3xl">
                <h1 className="text-2xl font-bold tracking-tight">
                    {meta.title}
                </h1>
                {!!meta.description && (
                    <p className="text-brand-gray mt-4 text-lg">
                        {meta.description}
                    </p>
                )}
                <div className="mt-6">
                    <Prose>{children}</Prose>
                </div>
            </section>
            {!!recentPosts.length && (
                <section aria-labelledby="recent-posts-heading">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h2
                            id="recent-posts-heading"
                            className="text-xl font-semibold"
                        >
                            Latest from the blog
                        </h2>
                        <Link
                            href="/blog"
                            className="text-brand-primary hover:text-brand-primaryHover font-medium transition-colors duration-100"
                        >
                            View all posts
                        </Link>
                    </div>
                    <div className="mt-6">
                        <PostList posts={recentPosts} postTitleTag="h3" />
                    </div>
                </section>
            )}
        </div>
    );
};

export default HomeTemplate;
