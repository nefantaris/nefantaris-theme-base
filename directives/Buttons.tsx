import type { PropsWithChildren } from "react";

const buttonsClasses = [
    "mt-8",
    "[&>ul]:mt-0 [&>ul]:flex [&>ul]:list-none [&>ul]:flex-wrap [&>ul]:gap-3",
    "[&>ul]:pl-0",
    "[&>ul>li]:mt-0 [&>ul>li]:pl-0",
    "[&>ul>li>a]:inline-flex [&>ul>li>a]:min-h-11 [&>ul>li>a]:items-center",
    "[&>ul>li>a]:gap-2 [&>ul>li>a]:rounded-md [&>ul>li>a]:border",
    "[&>ul>li>a]:border-brand-border [&>ul>li>a]:px-5",
    "[&>ul>li>a]:text-sm [&>ul>li>a]:font-medium [&>ul>li>a]:leading-6",
    "[&>ul>li>a]:text-brand-text [&>ul>li>a]:no-underline",
    "[&>ul>li>a]:transition-colors [&>ul>li>a]:duration-100",
    "[&>ul>li>a:hover]:border-brand-text [&>ul>li>a:hover]:bg-brand-surface",
    "[&>ul>li>a:hover]:text-brand-text",
    "[&>ul>li:first-child>a]:border-brand-primary",
    "[&>ul>li:first-child>a]:bg-brand-primary",
    "[&>ul>li:first-child>a]:text-brand-onPrimary",
    "[&>ul>li:first-child>a:hover]:border-brand-primaryHover",
    "[&>ul>li:first-child>a:hover]:bg-brand-primaryHover",
    "[&>ul>li:first-child>a:hover]:text-brand-onPrimary",
    "[&>ul>li>a[target]]:after:text-[0.875em]",
    "[&>ul>li>a[target]]:after:[content:'↗'_/_'']",
].join(" ");

const Buttons = ({ children }: PropsWithChildren) => (
    <div className={buttonsClasses}>{children}</div>
);

export default Buttons;
