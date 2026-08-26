import { sampleSite, sampleStudioImages } from "../../sampleData";
import { theme } from "../../theme";
import type { PageMeta } from "../../theme/types";

const meta: PageMeta = {
    title: "A look inside the new studio",
    description:
        "After eight months of sanding, wiring, and second-guessing the floor plan, the doors are finally open.",
    date: "2026-07-03",
};

const PostTemplate = theme.templates.post;
const Gallery = theme.directives.gallery;

const Post = () => (
    <PostTemplate site={sampleSite} meta={meta}>
        <p>
            When we signed the lease last November, the space was a bare
            concrete shell with one working socket and a pigeon problem. Eight
            months later it is a studio — with proper ventilation, a kiln room
            that does not double as a hallway, and enough shelving to stop the
            endless game of bisque-ware Tetris.
        </p>
        <h2>The workshop floor</h2>
        <p>
            The heart of the studio is the throwing area: four wheels under the
            north-facing window, where the light stays even all day. The
            <strong> glazing bench</strong> sits along the back wall, close
            enough to the kiln room that nothing travels far on a ware board.
        </p>
        <Gallery>
            <p>
                {sampleStudioImages.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} />
                ))}
            </p>
        </Gallery>
        <p>
            The photos above were taken the week before opening. It has already
            gotten messier, which we consider a sign of health.
        </p>
        <h2>What changed for our work</h2>
        <ol>
            <li>Firings run on our schedule, not the kiln share's calendar</li>
            <li>Glaze tests go from idea to tile in days instead of weeks</li>
            <li>There is finally room to teach without moving furniture</li>
        </ol>
        <blockquote>
            <p>
                A studio is just a promise you make to your future work — that
                it will have somewhere to happen.
            </p>
        </blockquote>
        <p>
            Come see it for yourself on a Saturday, or read more{" "}
            <a href="/about">about the studio</a>. Workshop dates for the autumn
            are on the <a href="/blog">blog</a>.
        </p>
    </PostTemplate>
);

export default Post;
