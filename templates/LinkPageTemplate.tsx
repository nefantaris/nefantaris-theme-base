import type { TemplateProps } from "nefantaris";

const bodyClasses = [
    "contents",
    "[&>*]:order-3 [&>*]:mt-6",
    "[&>p:first-child:has(>img:only-child)]:order-1",
    "[&>p:first-child:has(>img:only-child)]:mt-0",
    "[&>p:first-child:has(>img:only-child)]:mb-6",
    "[&>p:first-child:has(>img:only-child)>img]:mx-auto",
    "[&>p:first-child:has(>img:only-child)>img]:size-24",
    "[&>p:first-child:has(>img:only-child)>img]:rounded-full",
    "[&>p:first-child:has(>img:only-child)>img]:object-cover",
    "[&>p:first-child:has(>img:only-child)>img]:sm:size-28",
    "[&>p]:text-brand-muted [&>p]:text-center [&>p]:text-sm [&>p]:leading-6",
    "[&>p]:text-pretty",
    "[&_p_a]:text-brand-primary [&_p_a]:underline",
    "[&_p_a]:underline-offset-[3px]",
    "[&_p_a:hover]:text-brand-primaryHover",
    "[&>h2]:text-brand-muted [&>h2]:mt-10 [&>h2]:text-center [&>h2]:text-xs",
    "[&>h2]:font-semibold [&>h2]:tracking-[0.08em] [&>h2]:uppercase",
    "[&>h2+ul]:mt-4",
    "[&>ul]:flex [&>ul]:list-none [&>ul]:flex-col [&>ul]:gap-3 [&>ul]:pl-0",
    "[&>ul>li>a]:border-brand-border [&>ul>li>a]:text-brand-text",
    "[&>ul>li>a]:relative [&>ul>li>a]:flex [&>ul>li>a]:min-h-14",
    "[&>ul>li>a]:items-center [&>ul>li>a]:justify-center",
    "[&>ul>li>a]:rounded-md [&>ul>li>a]:border [&>ul>li>a]:px-10",
    "[&>ul>li>a]:py-3.5 [&>ul>li>a]:text-center [&>ul>li>a]:font-medium",
    "[&>ul>li>a]:leading-6 [&>ul>li>a]:break-words [&>ul>li>a]:text-pretty",
    "[&>ul>li>a]:transition-colors [&>ul>li>a]:duration-100",
    "[&>ul>li>a:hover]:border-brand-text [&>ul>li>a:hover]:bg-brand-surface",
    "[&>ul>li>a[target]]:after:text-brand-muted",
    "[&>ul>li>a[target]]:after:absolute",
    "[&>ul>li>a[target]]:after:right-4",
    "[&>ul>li>a[target]]:after:text-sm",
    "[&>ul>li>a[target]]:after:[content:'↗'_/_'']",
].join(" ");

const LinkPageTemplate = ({ meta, children }: TemplateProps) => (
    <div className="mx-auto flex max-w-md flex-col">
        <header className="order-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-balance">
                {meta.title}
            </h1>
            {!!meta.description && (
                <p className="text-brand-muted mt-2 leading-7 text-pretty">
                    {meta.description}
                </p>
            )}
        </header>
        <div className={bodyClasses}>{children}</div>
    </div>
);

export default LinkPageTemplate;
