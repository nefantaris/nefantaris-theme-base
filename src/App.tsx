import { lazy, Suspense, useDeferredValue, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { preloadAllRoutesWhenIdle, routeImports } from "./routes";
import { sampleSite } from "./sampleData";
import { theme } from "./theme";

const Home = lazy(routeImports["/"]);
const About = lazy(routeImports["/about"]);
const Blog = lazy(routeImports["/blog"]);
const Post = lazy(routeImports["/blog/:slug"]);
const NotFound = lazy(routeImports["/404"]);

const App = () => {
    const [location] = useLocation();
    const deferredLocation = useDeferredValue(location);

    useEffect(() => {
        preloadAllRoutesWhenIdle();
    }, []);

    return (
        <theme.Layout site={sampleSite}>
            <Suspense fallback={null}>
                <Switch location={deferredLocation}>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blog/:slug" component={Post} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </theme.Layout>
    );
};

export default App;
