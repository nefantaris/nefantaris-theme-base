import type { ComponentType } from "react";

type PageLoader = () => Promise<{ default: ComponentType }>;

export const routeImports: Record<string, PageLoader> = {
    "/": () => import("./pages/Home"),
    "/about": () => import("./pages/About"),
    "/blog": () => import("./pages/Blog"),
    "/blog/:slug": () => import("./pages/Post"),
    "/404": () => import("./pages/NotFound"),
};

let hasStartedIdlePreload = false;

export function preloadAllRoutesWhenIdle(): void {
    if (hasStartedIdlePreload) return;
    hasStartedIdlePreload = true;

    const { connection } = navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
    };
    if (connection?.saveData === true) return;
    if (connection?.effectiveType?.endsWith("2g") === true) return;

    const scheduleIdle = (callback: () => void): void => {
        if (typeof globalThis.requestIdleCallback === "function") {
            globalThis.requestIdleCallback(callback);
        } else {
            globalThis.setTimeout(callback, 1500);
        }
    };

    const queue = Object.values(routeImports);
    const loadNext = (): void => {
        const load = queue.shift();
        if (!load) return;
        void load()
            .finally(() => {
                scheduleIdle(loadNext);
            })
            .catch(() => {});
    };

    const start = (): void => scheduleIdle(loadNext);
    if (document.readyState === "complete") {
        start();
    } else {
        window.addEventListener("load", start, { once: true });
    }
}
