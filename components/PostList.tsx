import type { PostSummary } from "nefantaris";
import { Link } from "wouter";
import PostDate from "./PostDate";

type PostListProps = {
    posts: PostSummary[];
    postTitleTag: "h2" | "h3";
};

const PostList = ({ posts, postTitleTag }: PostListProps) => {
    const PostTitleTag = postTitleTag;

    return (
        <ul className="flex flex-col gap-3">
            {posts.map((post) => (
                <li key={post.route}>
                    <article className="bg-brand-surface rounded-md p-6">
                        <PostTitleTag className="text-lg font-semibold">
                            <Link
                                href={post.route}
                                className="hover:text-brand-primary transition-colors duration-100"
                            >
                                {post.title}
                            </Link>
                        </PostTitleTag>
                        <PostDate
                            date={post.date}
                            className="text-brand-gray mt-1 block text-sm"
                        />
                        {!!post.description && (
                            <p className="text-brand-gray mt-2">
                                {post.description}
                            </p>
                        )}
                    </article>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
