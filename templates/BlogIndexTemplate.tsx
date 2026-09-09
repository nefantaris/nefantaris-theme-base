import type { PostSummary, TemplateProps } from "nefantaris";
import PostList from "../components/PostList";
import { postYear } from "../components/postYear";
import Prose from "../components/Prose";

type PostsByYear = { year: string; posts: PostSummary[] }[];

const groupPostsByYear = (posts: PostSummary[]): PostsByYear => {
    const groups: PostsByYear = [];
    for (const post of posts) {
        const year = postYear(post.date);
        const last = groups.at(-1);
        if (last && last.year === year) {
            last.posts.push(post);
        } else {
            groups.push({ year, posts: [post] });
        }
    }
    return groups;
};

const BlogIndexTemplate = ({ meta, posts, children }: TemplateProps) => {
    const postsByYear = groupPostsByYear(posts);

    return (
        <div>
            <header className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                    {meta.title}
                </h1>
                {!!meta.description && (
                    <p className="text-brand-gray mt-5 max-w-2xl text-xl leading-8 text-pretty">
                        {meta.description}
                    </p>
                )}
                <div className="mt-6 max-w-2xl">
                    <Prose>{children}</Prose>
                </div>
            </header>
            {postsByYear.length ? (
                postsByYear.map((group) => (
                    <section
                        key={group.year}
                        aria-labelledby={`posts-${group.year}`}
                        className="border-brand-border mt-12 grid gap-x-8 gap-y-4 border-t pt-8 lg:grid-cols-12"
                    >
                        <h2
                            id={`posts-${group.year}`}
                            className="text-2xl font-semibold tracking-tight tabular-nums lg:col-span-2"
                        >
                            {group.year}
                        </h2>
                        <div className="lg:col-span-10">
                            <PostList
                                posts={group.posts}
                                postTitleTag="h3"
                                dateFormat="monthDay"
                            />
                        </div>
                    </section>
                ))
            ) : (
                <p className="text-brand-gray border-brand-border mt-12 border-t pt-8">
                    No posts yet.
                </p>
            )}
        </div>
    );
};

export default BlogIndexTemplate;
