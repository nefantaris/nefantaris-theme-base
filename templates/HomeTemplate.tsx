import type { TemplateProps } from "nefantaris";
import { Link } from "wouter";
import PostList from "../components/PostList";
import Prose from "../components/Prose";

const recentPostLimit = 4;

const HomeTemplate = ({ meta, posts, children }: TemplateProps) => {
    const recentPosts = posts.slice(0, recentPostLimit);

    return (
        <div>
            <section className="max-w-3xl">
                <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl">
                    {meta.title}
                </h1>
                {!!meta.description && (
                    <p className="text-brand-gray mt-6 max-w-2xl text-xl leading-8 text-pretty">
                        {meta.description}
                    </p>
                )}
                <div className="mt-8 max-w-2xl">
                    <Prose>{children}</Prose>
                </div>
            </section>
            {!!recentPosts.length && (
                <section
                    aria-labelledby="recent-posts-heading"
                    className="border-brand-border mt-16 grid gap-x-8 gap-y-6 border-t pt-10 lg:grid-cols-12"
                >
                    <div className="lg:col-span-3">
                        <h2
                            id="recent-posts-heading"
                            className="text-brand-gray text-xs font-semibold tracking-[0.08em] uppercase"
                        >
                            From the blog
                        </h2>
                        <Link
                            href="/blog"
                            className="text-brand-primary hover:text-brand-primaryHover mt-2 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-100 hover:underline hover:underline-offset-4"
                        >
                            All posts
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <div className="lg:col-span-9">
                        <PostList posts={recentPosts} postTitleTag="h3" />
                    </div>
                </section>
            )}
        </div>
    );
};

export default HomeTemplate;
