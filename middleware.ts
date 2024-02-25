import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/', "/api/webhooks(.*)"],
    ignoredRoutes: ['/tests', '/api/webhooks/clerk'],

    // ignoredRoutes: ['/no-auth-in-this-route'],
    // 
});

export const config = {
    // Protects all routes, including api/trpc.
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
