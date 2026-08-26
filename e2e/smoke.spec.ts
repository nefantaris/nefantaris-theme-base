import { expect, test, type Page } from "@playwright/test";

const collectErrors = (page: Page): string[] => {
    const errors: string[] = [];
    page.on("console", (message) => {
        if (message.type() === "error") {
            errors.push(message.text());
        }
    });
    page.on("pageerror", (error) => {
        errors.push(error.message);
    });
    return errors;
};

test("home template renders", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/");
    await expect(
        page.getByRole("heading", {
            name: "Handmade ceramics from a small studio in Bergen",
        })
    ).toBeVisible();
    await expect(
        page.getByRole("heading", { name: "Latest from the blog" })
    ).toBeVisible();
    await expect(page.locator("article")).toHaveCount(3);
    expect(errors).toEqual([]);
});

test("page template renders", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/about");
    await expect(
        page.getByRole("heading", { name: "About the studio" })
    ).toBeVisible();
    await expect(
        page.getByRole("heading", { name: "What we make" })
    ).toBeVisible();
    expect(errors).toEqual([]);
});

test("blog index template renders newest first", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/blog");
    await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
    await expect(page.locator("article")).toHaveCount(4);
    await expect(page.locator("article h2").first()).toHaveText(
        "Autumn workshop dates announced"
    );
    expect(errors).toEqual([]);
});

test("post template renders with gallery directive", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/blog/inside-the-new-studio");
    await expect(
        page.getByRole("heading", { name: "A look inside the new studio" })
    ).toBeVisible();
    await expect(page.locator("time").first()).toHaveText("July 3, 2026");
    await expect(page.locator("div.grid img")).toHaveCount(6);
    expect(errors).toEqual([]);
});

test("not found template renders", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/definitely-not-a-page");
    await expect(
        page.getByRole("heading", { name: "Page not found" })
    ).toBeVisible();
    await expect(
        page.getByRole("link", { name: "Back to home" })
    ).toBeVisible();
    expect(errors).toEqual([]);
});

test("layout nav navigates between templates", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/");
    await page.getByRole("link", { name: "Blog" }).click();
    await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
    await page
        .getByRole("link", { name: "A look inside the new studio" })
        .click();
    await expect(
        page.getByRole("heading", { name: "A look inside the new studio" })
    ).toBeVisible();
    expect(errors).toEqual([]);
});
