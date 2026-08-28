import type { TemplateProps } from "nefantaris";
import Prose from "../components/Prose";

const PageTemplate = ({ meta, children }: TemplateProps) => (
    <article className="mx-auto max-w-3xl">
        <header>
            <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
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

export default PageTemplate;
