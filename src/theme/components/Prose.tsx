import type { PropsWithChildren } from "react";

const Prose = ({ children }: PropsWithChildren) => (
    <div className="text-brand-black [&_a]:text-brand-primary [&_a:hover]:text-brand-primaryHover [&_blockquote]:border-brand-primary [&_blockquote]:bg-brand-surface [&_code]:bg-brand-surface [&_hr]:border-brand-border [&_pre]:bg-brand-surface text-base leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:mt-6 [&_blockquote]:rounded-md [&_blockquote]:border-l-4 [&_blockquote]:p-4 [&_code]:rounded-md [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold [&_hr]:mt-10 [&_img]:rounded-md [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&>:first-child]:mt-0">
        {children}
    </div>
);

export default Prose;
