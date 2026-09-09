import type { TemplateProps } from "nefantaris";
import Prose from "../components/Prose";

const PageTemplate = ({ meta, children }: TemplateProps) => (
    <article className="mx-auto max-w-2xl">
        <header>
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {meta.title}
            </h1>
            {!!meta.description && (
                <p className="text-brand-muted mt-4 text-lg leading-8 text-pretty">
                    {meta.description}
                </p>
            )}
        </header>
        <div className="border-brand-border mt-8 border-t pt-8">
            <Prose>{children}</Prose>
        </div>
    </article>
);

export default PageTemplate;
