import { samplePosts, sampleSite } from "../../sampleData";
import { theme } from "../../theme";
import type { PageMeta } from "../../theme/types";

const meta: PageMeta = {
    title: "Blog",
    description:
        "Studio news, workshop dates, and the occasional glaze chemistry rabbit hole.",
};

const BlogIndexTemplate = theme.templates.blogIndex;

const Blog = () => (
    <BlogIndexTemplate site={sampleSite} meta={meta} posts={samplePosts} />
);

export default Blog;
