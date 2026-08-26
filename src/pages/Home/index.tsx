import { samplePosts, sampleSite } from "../../sampleData";
import { theme } from "../../theme";
import type { PageMeta } from "../../theme/types";

const meta: PageMeta = {
    title: "Handmade ceramics from a small studio in Bergen",
    description:
        "Small-batch pottery, thrown and glazed by hand — made to be used every day.",
    template: "home",
};

const HomeTemplate = theme.templates.home;

const Home = () => (
    <HomeTemplate site={sampleSite} meta={meta} posts={samplePosts}>
        <p>
            Every piece that leaves our studio starts as a lump of Norwegian
            stoneware clay and ends as something we would want on our own table.
            We make mugs, bowls, and plates in small batches, so no two firings
            are ever quite the same.
        </p>
        <p>
            You can visit the workshop on Saturdays, join one of our
            wheel-throwing evenings, or read more{" "}
            <a href="/about">about the studio</a> and the people behind it.
        </p>
    </HomeTemplate>
);

export default Home;
