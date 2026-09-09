import type { TemplateProps } from "nefantaris";
import { Link } from "wouter";
import PostList from "../components/PostList";
import Prose from "../components/Prose";

const recentPostLimit = 4;

const sectionLabelClasses =
    "text-brand-muted text-xs font-semibold tracking-[0.08em] uppercase";

const homeBodyClasses = [
    "mt-8 lg:grid lg:grid-cols-12",
    "[&>*]:lg:col-span-full",
    "[&>p]:max-w-2xl [&>p]:text-lg [&>p]:leading-8",
    "[&>h2]:border-brand-border [&>h2]:mt-16 [&>h2]:border-t [&>h2]:pt-8",
    "[&>h2:first-child]:mt-8 [&>h2:first-child]:border-t",
    "[&>h2:first-child]:pt-8",
    "[&>h2]:text-brand-muted [&>h2]:text-xs [&>h2]:leading-8",
    "[&>h2]:font-semibold [&>h2]:tracking-[0.08em] [&>h2]:uppercase",
    "[&>h2]:lg:col-span-3 [&>h2]:lg:col-start-1 [&>h2]:lg:pr-8",
    "[&>h2~:not(h2)]:lg:col-span-7 [&>h2~:not(h2)]:lg:col-start-4",
    "[&>h2~p]:lg:max-w-none",
    "lg:[&>h2+:not(h2)]:border-brand-border lg:[&>h2+:not(h2)]:mt-16",
    "lg:[&>h2+:not(h2)]:border-t lg:[&>h2+:not(h2)]:pt-8",
].join(" ");

const HomeTemplate = ({ meta, posts, children }: TemplateProps) => {
    const recentPosts = posts.slice(0, recentPostLimit);

    return (
        <div>
            <section className="pt-4 sm:pt-10">
                <h1 className="max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    {meta.title}
                </h1>
                {!!meta.description && (
                    <p className="text-brand-muted mt-6 max-w-2xl text-lg leading-8 text-pretty sm:text-xl sm:leading-9">
                        {meta.description}
                    </p>
                )}
            </section>
            <Prose className={homeBodyClasses}>{children}</Prose>
            {!!recentPosts.length && (
                <section
                    aria-labelledby="recent-posts-heading"
                    className="mt-16 lg:grid lg:grid-cols-12"
                >
                    <div className="border-brand-border border-t pt-8 lg:col-span-3 lg:pr-8">
                        <h2
                            id="recent-posts-heading"
                            className={`${sectionLabelClasses} leading-8`}
                        >
                            From the blog
                        </h2>
                        <Link
                            href="/blog"
                            className="text-brand-primary hover:text-brand-primaryHover mt-1 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-100 hover:underline hover:underline-offset-4"
                        >
                            All posts
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <div className="border-brand-border mt-6 lg:col-span-7 lg:mt-0 lg:border-t lg:pt-8">
                        <PostList posts={recentPosts} postTitleTag="h3" />
                    </div>
                </section>
            )}
        </div>
    );
};

export default HomeTemplate;
