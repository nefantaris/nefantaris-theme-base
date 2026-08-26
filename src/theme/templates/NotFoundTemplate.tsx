import { Link } from "wouter";
import type { SiteMeta } from "../types";

type NotFoundTemplateProps = { site: SiteMeta };

const NotFoundTemplate = ({ site }: NotFoundTemplateProps) => (
    <section className="mx-auto max-w-3xl py-16 text-center">
        <p className="text-brand-primary text-sm font-semibold tracking-widest uppercase">
            404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
            Page not found
        </h1>
        <p className="text-brand-gray mt-4">
            We could not find that page on {site.name}. It may have moved or no
            longer exists.
        </p>
        <Link
            href="/"
            className="bg-brand-primary text-brand-white hover:bg-brand-primaryHover mt-8 inline-block rounded-md px-6 py-3 font-medium transition-colors duration-100"
        >
            Back to home
        </Link>
    </section>
);

export default NotFoundTemplate;
