import Gallery from "./directives/Gallery";
import Layout from "./Layout";
import BlogIndexTemplate from "./templates/BlogIndexTemplate";
import HomeTemplate from "./templates/HomeTemplate";
import NotFoundTemplate from "./templates/NotFoundTemplate";
import PageTemplate from "./templates/PageTemplate";
import PostTemplate from "./templates/PostTemplate";
import type { Theme } from "./types";

export type {
    LayoutProps,
    PageMeta,
    PostListTemplateProps,
    PostSummary,
    SiteMeta,
    TemplateProps,
    Theme,
} from "./types";

export const theme: Theme = {
    Layout,
    templates: {
        home: HomeTemplate,
        page: PageTemplate,
        post: PostTemplate,
        blogIndex: BlogIndexTemplate,
        notFound: NotFoundTemplate,
    },
    directives: {
        gallery: Gallery,
    },
};
