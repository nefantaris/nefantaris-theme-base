import type { NotFoundProps } from "nefantaris";
import { Link } from "wouter";

const NotFoundTemplate = ({ site }: NotFoundProps) => (
    <section className="mx-auto max-w-2xl py-8 sm:py-16">
        <p className="text-brand-primary text-sm font-semibold tracking-[0.08em] uppercase">
            Error 404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Page not found
        </h1>
        <p className="text-brand-gray mt-5 text-lg leading-8 text-pretty">
            There is no page at this address on {site.name}. It may have moved,
            or the link you followed may be out of date.
        </p>
        <Link
            href="/"
            className="text-brand-primary hover:text-brand-primaryHover mt-8 inline-flex items-center gap-2 font-medium transition-colors duration-100 hover:underline hover:underline-offset-4"
        >
            <span aria-hidden="true">←</span>
            Back to the home page
        </Link>
    </section>
);

export default NotFoundTemplate;
