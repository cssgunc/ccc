import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/newsletter", "routes/newsletter.tsx"),
    route("/data", "routes/data.tsx"),
    route("*", "routes/error.tsx"),
    route("/people", "routes/people.tsx"),
    route("/research", "routes/research.tsx"),
    route("/", "routes/starter.tsx"),
] satisfies RouteConfig;
