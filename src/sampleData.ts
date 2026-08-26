import type { PostSummary, SiteMeta } from "./theme/types";

export const sampleSite: SiteMeta = { name: "Fern & Forge" };

export const samplePosts: PostSummary[] = [
    {
        route: "/blog/autumn-workshop-dates",
        title: "Autumn workshop dates announced",
        description:
            "Six new wheel-throwing evenings are open for booking, from beginner tasters to a two-day glazing intensive.",
        date: "2026-08-12",
    },
    {
        route: "/blog/inside-the-new-studio",
        title: "A look inside the new studio",
        description:
            "After eight months of sanding, wiring, and second-guessing the floor plan, the doors are finally open.",
        date: "2026-07-03",
    },
    {
        route: "/blog/choosing-the-right-glaze",
        title: "Choosing the right glaze for everyday tableware",
        description:
            "Why we fire everything food-safe at cone 6, and how we test a new glaze before it touches a dinner plate.",
        date: "2026-05-21",
    },
    {
        route: "/blog/our-story-so-far",
        title: "Our story so far",
        description:
            "From a rented kiln share to a studio of our own — the short version of a long five years.",
        date: "2026-02-14",
    },
];

const svgImage = (from: string, to: string): string => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const sampleStudioImages = [
    {
        src: svgImage("#ddb892", "#b08968"),
        alt: "Freshly thrown bowls drying on a wooden rack",
    },
    {
        src: svgImage("#b08968", "#7f5539"),
        alt: "The kiln room with the new electric kiln",
    },
    {
        src: svgImage("#e6ccb2", "#9c6644"),
        alt: "Shelves of bisque-fired mugs waiting for glaze",
    },
    {
        src: svgImage("#9c6644", "#7f5539"),
        alt: "A potter's wheel under the north-facing window",
    },
    {
        src: svgImage("#c8b6a6", "#8a817c"),
        alt: "Glaze test tiles arranged by firing temperature",
    },
    {
        src: svgImage("#a98467", "#6c584c"),
        alt: "The finished packing bench by the studio door",
    },
];
