import type { TemplateProps } from "nefantaris";
import PostDate from "../components/PostDate";
import Prose from "../components/Prose";

const PostTemplate = ({ meta, children }: TemplateProps) => (
    <article className="mx-auto max-w-3xl">
        <header>
            {!!meta.date && (
                <PostDate
                    date={meta.date}
                    className="text-brand-gray text-sm font-medium"
                />
            )}
            <h1 className="mt-2 text-2xl font-bold tracking-tight">
                {meta.title}
            </h1>
            {!!meta.description && (
                <p className="text-brand-gray mt-4 text-lg">
                    {meta.description}
                </p>
            )}
        </header>
        <div className="mt-8">
            <Prose>{children}</Prose>
        </div>
    </article>
);

export default PostTemplate;
