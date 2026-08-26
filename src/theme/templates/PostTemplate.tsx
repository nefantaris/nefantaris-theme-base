import Prose from "../components/Prose";
import formatDate from "../formatDate";
import type { TemplateProps } from "../types";

const PostTemplate = ({ meta, children }: TemplateProps) => (
    <article className="mx-auto max-w-3xl">
        <header>
            {!!meta.date && (
                <time
                    dateTime={meta.date}
                    className="text-brand-gray text-sm font-medium"
                >
                    {formatDate(meta.date)}
                </time>
            )}
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
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
