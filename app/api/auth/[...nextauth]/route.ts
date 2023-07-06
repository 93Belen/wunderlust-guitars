import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import SpotifyProvider from "next-auth/providers/spotify"
import CognitoProvider from "next-auth/providers/cognito"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
	adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD,
          },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
  }),
      CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID as string,
        clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
        issuer: process.env.COGNITO_ISSUER,
      }),    
      SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID as string,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string
   }),
  ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }