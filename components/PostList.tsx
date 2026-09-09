import type { PostSummary } from "nefantaris";
import { Link } from "wouter";
import PostDate, { type PostDateFormat } from "./PostDate";

type PostListProps = {
    posts: PostSummary[];
    postTitleTag: "h2" | "h3";
    dateFormat?: PostDateFormat;
};

const PostList = ({
    posts,
    postTitleTag,
    dateFormat = "short",
}: PostListProps) => {
    const PostTitleTag = postTitleTag;

    return (
        <ul className="divide-brand-border border-brand-border divide-y border-b">
            {posts.map((post) => (
                <li key={post.route} className="py-5 first:pt-0">
                    <article className="sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                        <PostDate
                            date={post.date}
                            format={dateFormat}
                            className="text-brand-muted block text-sm tabular-nums sm:pt-1"
                        />
                        <div className="mt-1 sm:mt-0">
                            <PostTitleTag className="text-lg leading-snug font-semibold tracking-tight">
                                <Link
                                    href={post.route}
                                    className="hover:text-brand-primary transition-colors duration-100 hover:underline hover:underline-offset-4"
                                >
                                    {post.title}
                                </Link>
                            </PostTitleTag>
                            {!!post.description && (
                                <p className="text-brand-muted mt-1.5 leading-7 text-pretty">
                                    {post.description}
                                </p>
                            )}
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
