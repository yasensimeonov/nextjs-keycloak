export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/private"],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
}
