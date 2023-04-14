import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

interface GithubProviderOptions {
    clientId: string;
    clientSecret: string;
    redirect_uri: string;
}
export const authOptions = {  // Configure one or more authentication providers  
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            redirect_uri: process.env.NEXTAUTH_URL
        } as GithubProviderOptions),    // ...add more providers here
    ],
}

export default NextAuth(authOptions)