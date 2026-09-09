import type { TemplateProps } from "nefantaris";
import { Link } from "wouter";
import PostDate from "../components/PostDate";
import Prose from "../components/Prose";

const PostTemplate = ({ meta, children }: TemplateProps) => (
    <article className="mx-auto max-w-2xl">
        <header>
            {!!meta.date && (
                <PostDate
                    date={meta.date}
                    className="text-brand-gray block text-xs font-semibold tracking-[0.08em] uppercase"
                />
            )}
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {meta.title}
            </h1>
            {!!meta.description && (
                <p className="text-brand-gray mt-4 text-lg leading-8 text-pretty">
                    {meta.description}
                </p>
            )}
        </header>
        <div className="border-brand-border mt-8 border-t pt-8">
            <Prose>{children}</Prose>
        </div>
        <footer className="border-brand-border mt-12 border-t pt-6">
            <Link
                href="/blog"
                className="text-brand-primary hover:text-brand-primaryHover inline-flex items-center gap-2 text-sm font-medium transition-colors duration-100 hover:underline hover:underline-offset-4"
            >
                <span aria-hidden="true">←</span>
                All posts
            </Link>
        </footer>
    </article>
);

export default PostTemplate;
