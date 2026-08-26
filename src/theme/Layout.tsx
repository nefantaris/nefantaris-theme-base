import { Link, useLocation } from "wouter";
import classNames from "./classNames";
import type { LayoutProps } from "./types";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
];

const Layout = ({ site, children }: LayoutProps) => (
    <div className="bg-brand-background text-brand-black flex min-h-screen flex-col">
        <a
            href="#main-content"
            className="bg-brand-primary text-brand-white sr-only z-50 rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
            Skip to main content
        </a>
        <header className="border-brand-border border-b">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4">
                <Link href="/" className="text-lg font-bold">
                    {site.name}
                </Link>
                <nav aria-label="Main navigation">
                    <ul className="flex items-center gap-3">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <NavLink href={item.href} label={item.label} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
        <main
            id="main-content"
            className="mx-auto w-full max-w-7xl grow px-4 py-12"
        >
            {children}
        </main>
        <footer className="bg-brand-surface">
            <div className="text-brand-gray mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm">
                <p>
                    © {new Date().getFullYear()} {site.name}
                </p>
                <p>Built with Nefantaris</p>
            </div>
        </footer>
    </div>
);

type NavLinkProps = { href: string; label: string };

const NavLink = ({ href, label }: NavLinkProps) => {
    const [location] = useLocation();
    const isActive =
        href === "/" ? location === "/" : location.startsWith(href);

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={classNames(
                "rounded-md px-3 py-2 font-medium transition-colors duration-100",
                isActive
                    ? "bg-brand-surface text-brand-black"
                    : "text-brand-gray hover:bg-brand-surface hover:text-brand-black"
            )}
        >
            {label}
        </Link>
    );
};

export default Layout;
