import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/contact", "routes/contact.tsx"),
    route("/data", "routes/data.tsx"),
    route("*", "routes/error.tsx"),
    route("/people", "routes/people.tsx"),
    route("/resources", "routes/resources.tsx"),
    route("/", "routes/starter.tsx"),
] satisfies RouteConfig;
