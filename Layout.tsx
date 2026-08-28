import type { LayoutProps, NavItem } from "nefantaris";
import { Link } from "wouter";
import classNames from "./classNames";

const isCurrentPath = (href: string, currentPath: string): boolean =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

type NavLinkProps = {
    item: NavItem;
    currentPath: string;
    isNested?: boolean;
};

const NavLink = ({ item, currentPath, isNested }: NavLinkProps) => {
    const isActive = isCurrentPath(item.href, currentPath);

    return (
        <Link
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={classNames(
                "block rounded-md font-medium transition-colors duration-100",
                isNested ? "px-2 py-1 text-sm" : "px-3 py-2",
                isActive
                    ? "bg-brand-surface text-brand-black"
                    : "text-brand-gray hover:bg-brand-surface hover:text-brand-black"
            )}
        >
            {item.label}
        </Link>
    );
};

type NavBranchProps = {
    item: NavItem;
    currentPath: string;
};

const NavBranch = ({ item, currentPath }: NavBranchProps) => (
    <li className="flex flex-wrap items-center gap-1">
        <NavLink item={item} currentPath={currentPath} />
        {!!item.children?.length && (
            <ul className="flex flex-wrap items-center gap-1">
                {item.children.map((child) => (
                    <li key={child.href}>
                        <NavLink
                            item={child}
                            currentPath={currentPath}
                            isNested
                        />
                    </li>
                ))}
            </ul>
        )}
    </li>
);

const Layout = ({
    site,
    nav,
    currentPath,
    template,
    children,
}: LayoutProps) => (
    <div
        data-template={template}
        className="bg-brand-background text-brand-black flex min-h-screen flex-col"
    >
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
                {!!nav.length && (
                    <nav aria-label="Main navigation">
                        <ul className="flex flex-wrap items-center gap-3">
                            {nav.map((item) => (
                                <NavBranch
                                    key={item.href}
                                    item={item}
                                    currentPath={currentPath}
                                />
                            ))}
                        </ul>
                    </nav>
                )}
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

export default Layout;
