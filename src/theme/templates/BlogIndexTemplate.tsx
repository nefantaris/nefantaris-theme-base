import PostList from "../components/PostList";
import Prose from "../components/Prose";
import type { PostListTemplateProps } from "../types";

const BlogIndexTemplate = ({
    meta,
    posts,
    children,
}: PostListTemplateProps) => (
    <div className="mx-auto max-w-3xl">
        <header>
            <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
            {!!meta.description && (
                <p className="text-brand-gray mt-4 text-lg">
                    {meta.description}
                </p>
            )}
        </header>
        {!!children && (
            <div className="mt-6">
                <Prose>{children}</Prose>
            </div>
        )}
        <div className="mt-10">
            {posts.length ? (
                <PostList posts={posts} postTitleTag="h2" />
            ) : (
                <p className="text-brand-gray">No posts yet.</p>
            )}
        </div>
    </div>
);

export default BlogIndexTemplate;
