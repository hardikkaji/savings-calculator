import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("withdrawal", "routes/withdrawal.tsx"),
] satisfies RouteConfig;
