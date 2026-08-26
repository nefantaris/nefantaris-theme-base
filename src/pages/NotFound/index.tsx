import { sampleSite } from "../../sampleData";
import { theme } from "../../theme";

const NotFoundTemplate = theme.templates.notFound;

const NotFound = () => <NotFoundTemplate site={sampleSite} />;

export default NotFound;
