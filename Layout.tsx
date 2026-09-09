import type { LayoutProps, NavItem } from "nefantaris";
import { Link } from "wouter";
import classNames from "./classNames";
import ModeSwitch from "./components/ModeSwitch";

const linkPageTemplateName = "linkPage";
const mainNavigationLabel = "Main navigation";

const isCurrentPath = (href: string, currentPath: string): boolean =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

const isWithinBranch = (item: NavItem, currentPath: string): boolean =>
    isCurrentPath(item.href, currentPath) ||
    (item.children ?? []).some((child) =>
        isCurrentPath(child.href, currentPath)
    );

type NavLinkProps = {
    item: NavItem;
    currentPath: string;
    isActive: boolean;
    className: string;
    activeClassName: string;
};

const NavLink = ({
    item,
    currentPath,
    isActive,
    className,
    activeClassName,
}: NavLinkProps) => (
    <Link
        href={item.href}
        aria-current={item.href === currentPath ? "page" : undefined}
        className={classNames(
            "transition-colors duration-100",
            className,
            isActive
                ? activeClassName
                : "text-brand-muted hover:text-brand-text border-transparent"
        )}
    >
        {item.label}
    </Link>
);

type PrimaryNavProps = {
    nav: NavItem[];
    currentPath: string;
};

const PrimaryNav = ({ nav, currentPath }: PrimaryNavProps) => (
    <nav aria-label={mainNavigationLabel}>
        <ul className="flex flex-wrap items-center gap-x-6">
            {nav.map((item) => (
                <li key={item.href}>
                    <NavLink
                        item={item}
                        currentPath={currentPath}
                        isActive={isWithinBranch(item, currentPath)}
                        className="inline-block border-b-2 py-4 text-sm font-medium"
                        activeClassName="border-brand-primary text-brand-text"
                    />
                </li>
            ))}
        </ul>
    </nav>
);

type SectionNavProps = {
    branch: NavItem;
    items: NavItem[];
    currentPath: string;
};

const SectionNav = ({ branch, items, currentPath }: SectionNavProps) => (
    <div className="border-brand-border bg-brand-surface border-t">
        <nav
            aria-label={`${branch.label} section`}
            className="mx-auto max-w-7xl px-4 sm:px-6"
        >
            <ul className="flex flex-wrap items-center gap-x-6">
                {items.map((child) => (
                    <li key={child.href}>
                        <NavLink
                            item={child}
                            currentPath={currentPath}
                            isActive={isCurrentPath(child.href, currentPath)}
                            className="inline-block py-2.5 text-sm"
                            activeClassName="text-brand-text font-semibold"
                        />
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);

type MenuNavProps = {
    nav: NavItem[];
    currentPath: string;
};

const MenuNav = ({ nav, currentPath }: MenuNavProps) => (
    <nav aria-label={mainNavigationLabel} className="relative">
        <details>
            <summary className="text-brand-muted hover:text-brand-text cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-colors duration-100">
                Menu
            </summary>
            <ul className="border-brand-border bg-brand-background absolute top-full right-0 z-10 mt-2 flex min-w-48 flex-col gap-1 rounded-md border p-2">
                {nav.map((item) => (
                    <li key={item.href}>
                        <NavLink
                            item={item}
                            currentPath={currentPath}
                            isActive={isCurrentPath(item.href, currentPath)}
                            className="hover:bg-brand-surface block rounded-md px-3 py-2 text-sm font-medium"
                            activeClassName="text-brand-text bg-brand-surface"
                        />
                        {!!item.children?.length && (
                            <ul className="border-brand-border ml-3 flex flex-col gap-1 border-l pl-2">
                                {item.children.map((child) => (
                                    <li key={child.href}>
                                        <NavLink
                                            item={child}
                                            currentPath={currentPath}
                                            isActive={isCurrentPath(
                                                child.href,
                                                currentPath
                                            )}
                                            className="hover:bg-brand-surface block rounded-md px-3 py-1.5 text-sm"
                                            activeClassName="text-brand-text bg-brand-surface"
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </details>
    </nav>
);

const Layout = ({
    site,
    nav,
    currentPath,
    template,
    modes,
    children,
}: LayoutProps) => {
    const isLinkPage = template === linkPageTemplateName;
    const activeBranch = nav.find(
        (item) => !!item.children?.length && isWithinBranch(item, currentPath)
    );

    return (
        <div
            data-template={template}
            className="bg-brand-background text-brand-text flex min-h-screen flex-col antialiased"
        >
            <a
                href="#main-content"
                className="bg-brand-primary text-brand-onPrimary sr-only z-50 rounded-md px-4 py-2 font-medium focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
            >
                Skip to main content
            </a>
            <header className="border-brand-border border-b">
                {isLinkPage ? (
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
                        <Link
                            href="/"
                            className="text-brand-muted hover:text-brand-text text-sm font-semibold tracking-tight transition-colors duration-100"
                        >
                            {site.name}
                        </Link>
                        <div className="flex items-center gap-x-2">
                            {!!nav.length && (
                                <MenuNav nav={nav} currentPath={currentPath} />
                            )}
                            <ModeSwitch modes={modes} />
                        </div>
                    </div>
                ) : (
                    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 px-4 sm:px-6">
                        <Link
                            href="/"
                            className="py-4 text-lg font-bold tracking-tight"
                        >
                            {site.name}
                        </Link>
                        <div className="flex items-center gap-x-6">
                            {!!nav.length && (
                                <PrimaryNav
                                    nav={nav}
                                    currentPath={currentPath}
                                />
                            )}
                            <ModeSwitch modes={modes} />
                        </div>
                    </div>
                )}
                {!isLinkPage && !!activeBranch?.children?.length && (
                    <SectionNav
                        branch={activeBranch}
                        items={activeBranch.children}
                        currentPath={currentPath}
                    />
                )}
            </header>
            <main
                id="main-content"
                className={classNames(
                    "mx-auto w-full max-w-7xl grow px-4 sm:px-6",
                    isLinkPage ? "py-10 sm:py-14" : "py-12 sm:py-16"
                )}
            >
                {children}
            </main>
            <footer className="border-brand-border border-t">
                <div className="text-brand-muted mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-8 text-sm sm:px-6">
                    <p>
                        © {new Date().getFullYear()} {site.name}
                    </p>
                    <p>
                        Built with{" "}
                        <a
                            href="https://nefantaris.com"
                            className="text-brand-text hover:text-brand-primary font-medium transition-colors duration-100"
                        >
                            Nefantaris
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
