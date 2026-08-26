import { sampleSite } from "../../sampleData";
import { theme } from "../../theme";
import type { PageMeta } from "../../theme/types";

const meta: PageMeta = {
    title: "About the studio",
    description:
        "Who we are, where to find us, and what happens between the wheel and the kiln.",
};

const PageTemplate = theme.templates.page;

const About = () => (
    <PageTemplate site={sampleSite} meta={meta}>
        <p>
            Fern &amp; Forge is a two-person ceramics studio on the edge of
            Bergen. We share the space with a wood workshop, a very patient dog,
            and roughly four hundred kilograms of clay at any given time.
        </p>
        <h2>What we make</h2>
        <p>
            Our focus is everyday tableware: pieces that survive the dishwasher,
            feel right in the hand, and get better with use. Each batch is fired
            to <code>cone 6</code> in an electric kiln, which keeps our glazes
            consistent and food-safe.
        </p>
        <ul>
            <li>Mugs, cups, and tumblers in three sizes</li>
            <li>Bowls for everything from ramen to porridge</li>
            <li>Plates and platters, glazed edge to edge</li>
            <li>One-off experiments that escape the seconds shelf</li>
        </ul>
        <h2>Visiting</h2>
        <p>
            The studio is open to visitors every Saturday from 10:00 to 16:00.
            Wheel-throwing evenings run twice a month; dates are announced on
            the <a href="/blog">blog</a> and usually sell out within a week.
        </p>
        <h3>Our house glaze</h3>
        <p>
            People ask about the speckled white glaze more than anything else,
            so here is the recipe. It is forgiving, food-safe, and breaks
            beautifully over texture:
        </p>
        <pre>
            <code>
                {
                    "custer feldspar  40\nsilica           25\nwhiting          20\nkaolin           15\n+ granular ilmenite 2%"
                }
            </code>
        </pre>
        <blockquote>
            <p>
                Make something you will still want to eat from in ten years.
                Everything else about the studio follows from that.
            </p>
        </blockquote>
        <hr />
        <p>
            Wholesale and commission enquiries are always welcome — the kiln
            schedule just means we work eight to ten weeks ahead.
        </p>
    </PageTemplate>
);

export default About;
