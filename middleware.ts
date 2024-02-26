import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/credits",
    "/profile",
    "/transformations/add/restore",
    "/transformations/add/fill",
    "/transformations/add/remove",
    "/transformations/add/recolor",
    "/transformations/add/removeBackground",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
